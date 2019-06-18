#!/usr/bin/env bash

echo "Deployment started."

echo "Removing node_modules folder...."
rm -rf ./node_modules

echo "Installing dependency...."
npm install

echo "Deploying to AWS..."
REGION=ap-southeast-2
echo "serverless deploy --stage ${STAGE} --region ${REGION} --vpcId ${VPC_ID} --subnetId ${SUBNET_ID}"
./node_modules/serverless/bin/serverless deploy --stage ${STAGE} --region ${REGION} --vpcId ${VPC_ID} --subnetId ${SUBNET_ID}
