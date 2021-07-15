import json

def store_to_file(data : dict, path: str, format='json'):
    if format == 'json':
        json_data = json.dumps(data, indent=2)
        with open(path, 'w') as output_file:
            output_file.write(json_data)
    else:
        return Exception(f'Unsupported format: {format}')
