from ibmcloudant.cloudant_v1 import CloudantV1, Document, BulkDocs
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_cloud_sdk_core import ApiException

CLOUDANT_CFC_URL = 'https://bcf5339c-0d92-4076-a014-7bec47a478d2-bluemix.cloudantnosqldb.appdomain.cloud'
CLOUDANT_CFC_APIKEY = 'MnL6AE3th-LZLXOew1seVHN73Wj5oZJY0gsLmzNbYZwu'

class Cloudant:
    def __init__(self):
        self.authenticator = IAMAuthenticator(CLOUDANT_CFC_APIKEY)
        self.service = CloudantV1(authenticator=self.authenticator)
        self.service.set_service_url(CLOUDANT_CFC_URL)
        
    def create_database(self, db='repairability'):
        try:
            response = self.service.put_database(db=db).get_result()
            print(response)
        except ApiException as ae:
            print("Method failed")
            print(" - status code: " + str(ae.code))
            print(" - error message: " + ae.message)
            if ("reason" in ae.http_response.json()):
                print(" - reason: " + ae.http_response.json()["reason"])
            return False
        return True

    def delete_database(self, db='repairability'):
        try:
            response = self.service.delete_database(db=db).get_result()
            print(response)
        except ApiException as ae:
            print("Method failed")
            print(" - status code: " + str(ae.code))
            print(" - error message: " + ae.message)
            if ("reason" in ae.http_response.json()):
                print(" - reason: " + ae.http_response.json()["reason"])
            return False
        return True

    def get_server_info(self):
        return self.service.get_server_information().get_result()

    def get_database_list(self):
        return self.service.get_all_dbs().get_result()
    
    def create_document(self, data: dict, db='repairability'):
        return self.create_documents([data], db)
    
    def create_documents(self, data_list: list, db='repairability'):
        try:
            document_lit = [Document(**data, _id=data['id']) for data in data_list]
            bulk_docs = BulkDocs(docs=document_lit)
            response = self.service.post_bulk_docs(db=db, bulk_docs=bulk_docs).get_result()
            return sum(result.get('ok', False) for result in response)
        except ApiException as ae:
            print("Method failed")
            print(" - status code: " + str(ae.code))
            print(" - error message: " + ae.message)
            if ("reason" in ae.http_response.json()):
                print(" - reason: " + ae.http_response.json()["reason"])
        return 0
    
    def get_all_docs(self, db='repairability', full_data=True):
        try:
            return self.service.post_all_docs(db=db, include_docs=full_data).get_result()
        except ApiException as ae:
            print("Method failed")
            print(" - status code: " + str(ae.code))
            print(" - error message: " + ae.message)
            if ("reason" in ae.http_response.json()):
                print(" - reason: " + ae.http_response.json()["reason"])
        return None
    
    # TODO: 
    #   1. Update document
    #   2. Delete document
    
def __test():
    cloudant = Cloudant()
    cloudant.create_database('test')
    print(f'Server Info: {cloudant.get_server_info()}')
    print(f'Database List: {cloudant.get_database_list()}')
    data =   {
    "id": "dummy_id",
    "name": "iPhone 14 Pro Max",
    "manufacturer": "iPhone",
    "model": "14 Pro Max",
    "issue_time": "2020-11-21T00:00:00-07:00",
    "score": "6",
    "plus_and_minus": {
      "plus": [
        "Screen and battery remain prioritized and reasonably accessible for replacement.",
        "Most components are fairly modular and replaceable."
      ],
      "minus": [
        "The glass back makes drops even more dangerous and requires a full case replacement if it breaks."
      ]
    }
    }
    create_doc_result = cloudant.create_document(data, 'test')
    print(f'Upload {create_doc_result} data')
    summary = cloudant.get_all_docs('test', False)
    print(f'Get summary: {summary}')
    full_data = cloudant.get_all_docs('test')
    print(f'Get summary: {full_data}')
    cloudant.delete_database('test')

if __name__ == '__main__':
    __test()