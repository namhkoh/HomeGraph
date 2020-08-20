## HomeGraph @ the Edge

This section of the HomeGraph repo contains the configuration to run HomeGraph within the home as a service on the mesh network, making it's services discoverable by any other node on the network. This edge node also implements an event pipe from smartThings emitting smartThings events into the home bus on the `homegraph.smartThings` topic.

The only external configuration required is the same `.env` information as documented in the main readme. Plus the addition of the following:

```
APOLLO_ENGINE_KEY=TEST
CLIENT_ID= *The ID for the IAM account associated with Simple Queue services*
CLIENT_SECRET= *The secret for IAM account associated with Simple Queue service*
QUEUE_URL= *The Simple Queue service URL*
```

To run this configuration simply do `npm install .` and then `npm run`