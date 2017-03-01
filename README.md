# What's this?
This is a sample to demonstrate how to get Auth0 Management API token and cache it in-memory. 
If not found it will get a new token.

# Pre-requisites
- Create a client and autorize it for Management API under [API](/#/api) section of Auth0 dashboard.
- Go to API Explorer sectioc. Create and Authorize Test API Explorer client.
- Update the Token Expiration to 10 seconds (For testing purpose)
- Create a .env file and setup CLIENT_ID and CLIENT_SECRET for the client created in first step above.


# Run this sample

First, install dependencies.

```
npm install
```

then run the index.js

```
node index.js
```

Terminate the process with Ctrl + C
