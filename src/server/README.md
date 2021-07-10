# recycle server
This is node.js server for serving the major logic for the recycle.

the server will provide few of APIs, whcih can be used for retrieving or searching the data.

# API definitions
| API                       | HTTP Verbs | Description                                                                        | Request | Response  |
|---------------------------|------------|------------------------------------------------------------------------------------|---------|-----------|
| /api/matches/{terms}      | GET        | Query the resources to get all matches based on passed in terms (separated by ';') |         | matches[] |
| /api/matches/{resourceId} | GET        | Get the details of the matched item                                                |         | resource  |
|                           |            |                                                                                    |         |           |
