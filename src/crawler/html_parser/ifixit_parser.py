from collections import defaultdict

from bs4 import BeautifulSoup
import json

from html_parser.html_parser import HTMLParser

class IFixItParser(HTMLParser):
    def _parse_html(self):
        soup = BeautifulSoup(self.html_doc, 'html.parser')
        result = []

        for device_div in soup.find_all('div', "table parent"):
            device_name_div = device_div.find('div', 'cell device-name')
            manufacturer = device_name_div.contents[0].strip()
            model = device_name_div.find('span').get_text().strip()
            device = {}
            device['name'] = f'{manufacturer} {model}'
            device['manufacturer'] = manufacturer
            device['model'] = model
            device['issue_time'] = device_name_div.find('time')['datetime']

            device_score_div = device_div.find('div', 'cell device-score')
            device['score'] = device_score_div.get_text(strip=True)
            result.append(device)

            device['plus_and_minus'] = defaultdict(list)
            plus_and_minus_ul = device_div.find('ul', 'device-list')
            for pluse_or_minus in ['plus', 'minus']:
                for pluse_or_minus_li in plus_and_minus_ul.find_all('li', f'device-detail {pluse_or_minus}'):
                    device['plus_and_minus'][pluse_or_minus].append(pluse_or_minus_li.get_text(strip=True))

        j = json.dumps(result, indent=2)
        print(j)
        return result
