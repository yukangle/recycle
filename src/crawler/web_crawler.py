import os

import requests

from html_parser.ifixit_parser import IFixItParser
from store_result import store_to_file, store_to_cloudant
from database.cloudant import Cloudant

def crawl_url(url: str):
    #url = 'https://www.baidu.com/'
    r = requests.get(url)
    html_doc = r.text
    return html_doc


def main():
    cloundant = Cloudant()
    cloundant.delete_database('repairability')
    cloundant.create_database('repairability')

    parser = IFixItParser()
    smartphone_path = os.path.join(os.path.dirname(__file__), 'data/iFixit/Smartphone Repairability Scores.html')
    smartphone_result = parser.parse_from_file(smartphone_path)
    store_to_file(smartphone_result, os.path.join(os.path.dirname(__file__), 'data/result/smartphone.json'))
    store_to_cloudant(smartphone_result)
    
    laptop_path = os.path.join(os.path.dirname(__file__), 'data/iFixit/Laptop Repairability Scores.html')
    laptop_result = parser.parse_from_file(laptop_path)
    store_to_file(laptop_result, os.path.join(os.path.dirname(__file__), 'data/result/laptop.json'))
    store_to_cloudant(laptop_result)

    tablet_path = os.path.join(os.path.dirname(__file__), 'data/iFixit/Tablet Repairability Scores.html')
    tablet_result = parser.parse_from_file(tablet_path)
    store_to_file(tablet_result, os.path.join(os.path.dirname(__file__), 'data/result/tablet.json'))
    store_to_cloudant(tablet_result)

if __name__ == '__main__':
    main()
