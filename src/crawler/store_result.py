import json
from database.cloudant import Cloudant

def store_to_file(data_list : list, path: str, format='json'):
    if format == 'json':
        json_data = json.dumps(data_list, indent=2)
        with open(path, 'w') as output_file:
            output_file.write(json_data)
        print(f'{len(data_list)} data have been save to {path}')
    else:
        return Exception(f'Unsupported format: {format}')

def store_to_cloudant(data_list : list):
    cloudant = Cloudant()
    success_count = cloudant.create_documents(data_list)
    print(f'{success_count} data have been save to Cloudant')
