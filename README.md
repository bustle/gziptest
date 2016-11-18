# gziptest



1. Replace `shep.accountId` in package.json
2. Make `shep.apiId` in package.json a blank string
3. `npm install -g shep`
4. `npm install`
5. `shep deploy production`
6. `curl --compress -v -H 'Accept: text/html' https://${API_ID}.execute-api.us-east-1.amazonaws.com/production/lambda`
7. `curl --compress -v -H 'Accept: text/html' https://${API_ID}.execute-api.us-east-1.amazonaws.com/production/lambda-proxy`
