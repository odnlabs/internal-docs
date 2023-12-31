# API Client

The `api-client` package is essentially a class that provides methods to easily interact with the backend api. This package is used by the `site` and `web` applications.

## Usage

```ts
import { Client } from '@opendevnet/api-client';
import { ChannelType } from '@opendevnet/types';

// Initialize a new instance of the client class 
const client = new Client({
	version: 1,
});

// Authenticate the client with a username and password, if not already authenticated
// The client will request a refresh token, if one doesn't exist
// The client will request an access token, if one doesn't exist
client.login({
	username: 'slekup',
	password: 'GO3BWLT93HGPAY'
});

// All requests from this point will be authenticated with the access token

// Connect to the API via websocket
client.connect();

// Send a private message to a user
client.send({
	type: ChannelType.DirectMessage,
	to: friend.id,
	content: 'Hello friend!'
})


// Logout and finish the session
client.logout();
```