# gziptest


1. Replace `shep.accountId` in package.json with your AWS account ID
2. Replace `shep.apiId` in package.json with a blank string
3. Modify the `Role` property in lambda.json to the Lambda basic execution role in your account 
4. Modify the integration settings in the api.json file to point to the correct Lambda function ARN
5. `npm install -g shep`
6. `npm install`
7. `shep deploy production`
8. `curl --compress -v -H 'Accept: text/html' https://${API_ID}.execute-api.us-east-1.amazonaws.com/production/lambda`
9. `curl --compress -v -H 'Accept: text/html' https://${API_ID}.execute-api.us-east-1.amazonaws.com/production/lambda-proxy`
