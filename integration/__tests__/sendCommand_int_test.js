const fetch = require('node-fetch');

describe('Send Command', () => {
  // This test uses a Samsung virtual thermostat id is 156562fe-9974-4fc5-a10d-8da09ed3f498
  it('sets the cooling set point of virtual thermostat', async () => {
    const mutation = `
      mutation {
        sendCommand(input: {
          deviceId: "156562fe-9974-4fc5-a10d-8da09ed3f498"
          capability: "thermostat",
          component: "main",
          command: "setCoolingSetpoint"
          args: [
            80
          ]
        }) {
          status
        }
    }
    `;
    const queryStr = encodeURI(mutation);
    const response = await fetch(
      `http://localhost:4000/graphql/?query=${queryStr}`,
      {
        method: 'post',
      }
    );
    const responseObj = await response.json();
    expect(responseObj.data).not.toBeNull();
    expect(responseObj.data).not.toBeUndefined();
    expect(responseObj.data.sendCommand.status).toEqual('OK');
  });
});
