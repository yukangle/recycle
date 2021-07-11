from abc import ABCMeta, abstractmethod

import requests

class HTMLParser(metaclass=ABCMeta):
    def __init__(self):
        self.html_doc = None

    def parse_from_url(self, url):
        response = requests.get(url)
        self.html_doc = response.text
        self._parse_html()

    def parse_from_file(self, file_path):
        with open(file_path, encoding='UTF-8') as file:
            self.html_doc = file.read()
        self._parse_html()

    @abstractmethod
    def _parse_html(self):
        pass
