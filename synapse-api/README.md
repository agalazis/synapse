# synapse

Synapse, because sending coupon codes is not rocket science

## Install It
```
yarn install
```
## Environment setup 
Setup the environment by copying sample.env to .env and fill in the placeholders

## Make sure you compile the client first
Compile app in the sibling folder first 

`cd ../synapse-client`

`yarn build` 

then return back to this folder
#### Run 

```
npm compile 
npm start
```
or 
```
yarn compile
yarn start
```

#### Deploy to the Cloud
e.g. CloudFoundry

```
cf push synapse
```

### Try It
* Point you're browser to [http://localhost:8080](http://localhost:8080)
   
