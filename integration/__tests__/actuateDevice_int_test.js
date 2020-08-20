const fetch = require('node-fetch');

describe('actuateDevice', () => {
  it('actuate the input device with corresponding commmand', async () => {
    const mutation = `mutation{
            actuateDevice(input: {deviceName: "hgv_light", command: on}) {
                status
            }
        }`;
    const queryStr = encodeURI(mutation);
    const response = await fetch(
      `http://localhost:4000/graphql/?query=${queryStr}`,
      { method: 'post' }
    );
    const responseObj = await response.json();
    console.log('here!:', responseObj);
    expect(responseObj.data).not.toBeNull();
    expect(responseObj.data.actuateDevice.status).toEqual('OK');
  });
});
