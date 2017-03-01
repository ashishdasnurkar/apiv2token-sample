# What's this?
This is a sample to demonstrate how to get Auth0 Management API token and cache it in-memory. 
For subsequent calls, first it checks if the token is available in cache. 
If then returns the cached token. 
If not found it will get a new token and cache again.

# Pre-requisites
- Create a Non-interactive client and autorize it for Auth0 Management API under [API](/#/api) section of Auth0 dashboard.
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
