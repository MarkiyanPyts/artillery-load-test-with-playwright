## How it was made

Followed this guide:
https://github.com/artilleryio/artillery/blob/main/examples/browser-playwright-reuse-authentication/README.md

## How to run locally 
```
npx artillery run scenario.yml
```

## Run in Fargate
```
npx artillery run scenario.yml
npx artillery run-fargate scenario_prod.yml --count 1 --launch-config '{"cpu": 8192, "memory": 32768}'
npx artillery run-fargate scenario_prod.yml --count 1 --launch-config '{"cpu": 8192, "memory": 61440}'
npx artillery run-fargate scenario_prod.yml --count 2 --launch-config '{"cpu": 8192, "memory": 61440}'
```

## Don't keep test scenarios in same level as package.json or dont install artillery locally
https://www.artillery.io/docs/get-started/get-artillery#installing-as-a-devdependency-in-nodejs-projects

## Docs
https://www.artillery.io/docs/load-testing-at-scale/aws-fargate
https://www.artillery.io/docs/reference/cli/run-fargate

## Test Duration
15s