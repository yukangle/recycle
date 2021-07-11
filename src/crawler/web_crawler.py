import os

import requests

from html_parser.ifixit_parser import IFixItParser

def crawl_url(url):
    #url = 'https://www.baidu.com/'
    r = requests.get(url)
    html_doc = r.text
    return html_doc


def main():
    parser = IFixItParser()
    path1 = os.path.join(os.path.dirname(__file__), 'data/iFixit/Smartphone Repairability Scores.html')
    parser.parse_from_file(path1)
    
    path1 = os.path.join(os.path.dirname(__file__), 'data/iFixit/Laptop Repairability Scores.html')
    parser.parse_from_file(path1)

    path1 = os.path.join(os.path.dirname(__file__), 'data/iFixit/Tablet Repairability Scores.html')
    parser.parse_from_file(path1)

if __name__ == '__main__':
    main()