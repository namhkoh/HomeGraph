const fetch = require('node-fetch');

const getLocationDetails = async location => {
  const response = await fetch(
    `https://api.smartthings.com/locations/${location.locationId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
      },
    }
  );
  const realLocation = await response.json();
  return realLocation;
};

const getRoomDetails = async ({ roomId, locationId }) => {
  const response = await fetch(
    `https://api.smartthings.com/locations/${locationId}/rooms/${roomId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
      },
    }
  );
  const realRoom = await response.json();
  return realRoom;
};

const getStatusForComponent = async (deviceId, { id }) => {
  try {
    const response = await fetch(
      `https://api.smartthings.com/devices/${deviceId}/components/${id}/status`,
      {
        headers: {
          Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
        },
      }
    );
    const realStatus = await response.json();
    return realStatus;
  } catch (err) {
    return null;
  }
};

const getStatusForCapability = async (deviceId, id, capability) => {
  try {
    const response = await fetch(
      `https://api.smartthings.com/devices/${deviceId}/components/${id}/capabilities/${capability}/status`,
      {
        headers: {
          Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
        },
      }
    );
    const realStatus = await response.json();
    return realStatus;
  } catch (err) {
    return null;
  }
};

const getLocations = async () => {
  const response = await fetch(`https://api.smartthings.com/locations`, {
    headers: {
      Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
    },
  });
  const responseObj = await response.json();
  const output = [];
  for (let i = 0; i < responseObj.items.length; i++) {
    const realLocation = await getLocationDetails(responseObj.items[i]);
    output.push(realLocation);
  }
  return output;
};

const getRooms = async locationId => {
  const response = await fetch(
    `https://api.smartthings.com/locations/${locationId}/rooms`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
      },
    }
  );
  const responseObj = await response.json();
  return responseObj.items;
};

const getDevicesForRoom = async (locationId, roomId) => {
  const response = await fetch(
    `https://api.smartthings.com/locations/${locationId}/rooms/${roomId}/devices`,
    {
      headers: { Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}` },
    }
  );
  const responseObj = await response.json();
  return responseObj.items;
};

const getAllDevices = async (page, max) => {
  const myURL = new URL('https://api.smartthings.com/devices');
  if (page) {
    myURL.searchParams.set('page', page);
  }

  if (max) {
    myURL.searchParams.set('max', max);
  }
  const response = await fetch(myURL.toString(), {
    headers: { Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}` },
  });
  try {
    const responseObj = await response.json();
    return responseObj;
  } catch (e) {
    throw e;
  }
};

const addNewLocation = async location => {
  const response = await fetch(' https://api.smartthings.com/v1/locations', {
    method: 'post',
    body: JSON.stringify(location.input),
    headers: {
      Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
    },
  }).catch(error => {
    console.log('ERROR', error);
  });
  const resLocation = await response.json();
  return resLocation;
};

const actuateDevice = async (deviceLabel, command) => {
  let response = await fetch(`https://api.smartthings.com/v1/devices`, {
    headers: {
      Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
    },
  }).catch(error => {
    console.log('ERROR', error);
  });
  const devs = await response.json();
  for (let i = 0; i < devs.items.length; i++) {
    if (devs.items[i].label == deviceLabel) {
      const rawBody = {
        commands: [
          {
            component: devs.items[i].components.id,
            capability: 'switch',
            command,
            arguments: [],
          },
        ],
      };
      response = await fetch(
        `https://api.smartthings.com/v1/devices/${devs.items[i].deviceId}/commands/`,
        {
          method: 'post',
          body: JSON.stringify(rawBody),
          headers: {
            Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
          },
        }
      );
      const statusCode = { status: response.statusText };
      return statusCode;
    }
  }
};

const sendCommand = async (deviceId, component, capability, command, args) => {
  const rawBody = {
    commands: [
      {
        component,
        capability,
        command,
        arguments: args,
      },
    ],
  };
  const response = await fetch(
    `https://api.smartthings.com/v1/devices/${deviceId}/commands/`,
    {
      method: 'post',
      body: JSON.stringify(rawBody),
      headers: {
        Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
      },
    }
  );
  const statusCode = { status: response.statusText };
  return statusCode;
};

const deleteLocation = async arg => {
  const inputLocationId = arg.locationId;
  const response = await fetch(
    ` https://api.smartthings.com/v1/locations/${inputLocationId}`,
    {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
      },
    }
  );
  const statusCode = { status: response.statusText };
  return statusCode;
};

const createRoom = async (roomName, locationId) => {
  const rawBody = {
    name: roomName,
  };
  const response = await fetch(
    `https://api.smartthings.com/v1/locations/${locationId}/rooms`,
    {
      method: 'post',
      body: JSON.stringify(rawBody),
      headers: {
        Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
      },
    }
  ).catch(error => {
    console.log('ERROR', error);
  });
  const addedRoom = await response.json();
  return addedRoom;
};

const deleteRoom = async (roomId, locationId) => {
  const response = await fetch(
    `https://api.smartthings.com/v1/locations/${locationId}/rooms/${roomId}`,
    {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`,
      },
    }
  );
  const statusCode = { status: response.statusText };
  return statusCode;
};

exports.getLocations = getLocations;
exports.getRooms = getRooms;
exports.createRoom = createRoom;
exports.deleteRoom = deleteRoom;
exports.getDevicesForRoom = getDevicesForRoom;
exports.getAllDevices = getAllDevices;
exports.getStatusForComponent = getStatusForComponent;
exports.getStatusForCapability = getStatusForCapability;
exports.addNewLocation = addNewLocation;
exports.actuateDevice = actuateDevice;
exports.deleteLocation = deleteLocation;
exports.getLocationDetails = getLocationDetails;
exports.getRoomDetails = getRoomDetails;
exports.sendCommand = sendCommand;
