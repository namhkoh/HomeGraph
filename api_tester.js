const fetch = require('node-fetch');
const { DeviceList } = require('./lib/graphutils/devices');
const { getAllDevices } = require('./lib/smartThingsUtils')

const addNewLocation = async (name) => {
    const rawBody = {
        "locationId": "ef8fa154-57c0-4ca4-ae96-04803295850d",
        "name": `${name}`,
        "countryCode": "USA",
        "latitude": 45.00708112,
        "longitude": -93.11223629,
        "regionRadius": 150,
        "temperatureScale": "F",
        "timeZoneId": "America/Chicago",
        "locale": "en",
        "backgroundImage": null,
        "additionalProperties": {}
    }
    const response = await fetch(" https://api.smartthings.com/v1/locations", {
        method: 'post',
        body: JSON.stringify(rawBody),
        headers: {
            Authorization: 'Bearer 0010832f-8afe-4295-971a-9214716e2963'
        }
    })
    let resLocation = await response.json()
    return resLocation
};

const turnOnOffDevice = async (deviceName, command) => {
    const light_dict = {
        "Candle light 1": "4fcfc464-1d5e-4de6-a7e2-cc510a7b49fd",
        "Brown lamp": "50a5a1b5-0173-4c7c-9cf6-50b0778b0f4b",
        "Torch lamp": "3f44c0fa-9a4c-4f5f-ae95-5ed29ff2ce5c",
        "Candle light 2": "71419cfd-f55e-48ea-8285-4f6e3a14438d",
        "Back light left": "43a36c8a-daa7-4988-b80c-f00392c63fc7",
        "Back light right": "2eca2a64-ae5a-4647-8bb3-2dec4edbb707",
        "Hue lightstrip plus 1": "4089f07f-67de-4949-bfae-7db6b053b2fb",
        "Candle light 3": "214572e7-2ce3-4f77-ab40-79d27fd49627",
        "Turquoise lamp": "5fe15321-13ab-400f-bfa9-f40e3b598612",
        "Chrome Lamp": "0ba76223-b41b-41e3-b609-523660d04374"
    }
    const rawBody = {
        "commands": [
            {
                "component": "main",
                "capability": "switch",
                "command": `${command}`,
                "arguments": [
                ]
            }]
    }
    const response = await fetch("https://api.smartthings.com/v1/devices/" + light_dict[`${deviceName}`] + "/commands/", {
        method: 'post',
        body: JSON.stringify(rawBody),
        headers: {
            Authorization: 'Bearer 0010832f-8afe-4295-971a-9214716e2963'
        }
    })
    let status = await response.json()
    console.log("status : ", status)
}

const deleteLocation = async (locationId) => {
    const response = await fetch(" https://api.smartthings.com/v1/locations/" + locationId, {
        method: 'delete',
        headers: {
            Authorization: 'Bearer 0010832f-8afe-4295-971a-9214716e2963'
        }
    })
    const statusCodeSucess = 200
    const statusCodeFail = 400
    let status = await response.json()
    console.log("status : ", status)
}

const createRoom = async (roomName, targetLocationId) => {
    const rawBody = {
        "name": roomName
    }
    const response = await fetch("https://api.smartthings.com/v1/locations/" + targetLocationId + "/rooms", {
        method: 'post',
        body: JSON.stringify(rawBody),
        headers: {
            Authorization: 'Bearer 0010832f-8afe-4295-971a-9214716e2963'
        }
    })
    let addedRoom = await response.json()
    return addedRoom
};

const deleteRoom = async (targetLocationId, targetRoomId) => {
    const response = await fetch("https://api.smartthings.com/v1/locations/" + targetLocationId + "/rooms/" + targetRoomId, {
        method: 'delete',
        headers: {
            Authorization: 'Bearer 0010832f-8afe-4295-971a-9214716e2963'
        }
    })
    let status = await response.json()
    console.log("status : ", status)
}
const getStockPrice = async (ticker) => {
    const response = await fetch(
        "https://finnhub.io/api/v1/quote?symbol=" + ticker + "&token=bqm5mmnrh5rf7sg5vugg",
    );
    const stockJson = await response.json();
    console.log(stockJson)
    return stockJson
}

const getDeviceStatus = async (deviceId) => {
    try {
        const response = await fetch(` https://api.smartthings.com/v1/devices/4fcfc464-1d5e-4de6-a7e2-cc510a7b49fd/status`, {
            headers: {
                Authorization: `Bearer ${process.env.SMARTTHINGS_TOKEN}`
            }
        })
        const status = await response.json();
    } catch (error) {
        console.log("ERR : " + error)
    }
}

const sampleRun = async () => {
    try {
        const response = await fetch(` https://api.smartthings.com/v1/devices/4fcfc464-1d5e-4de6-a7e2-cc510a7b49fd/status`, {
            headers: {
                Authorization: 'Bearer 0010832f-8afe-4295-971a-9214716e2963'
            }
        })
        const status = await response.json();
        console.log(status["components"]["main"])
    } catch (error) {
        console.log("ERR : " + error)
    }
}

// sampleRun();

const getCapabilities = async () => {
    const response = await fetch(`https://api.smartthings.com/v1/devices`, {
        headers: {
            Authorization: 'Bearer 0010832f-8afe-4295-971a-9214716e2963'
        }
    }).catch(error => {
        console.log('ERROR', error);
    });
    const devs = await response.json();
    console.log(devs.items[0])
}

//getCapabilities();


const actuateDevice = async (deviceLabel, command) => {
    const response = await fetch(`https://api.smartthings.com/v1/devices`, {
        headers: {
            Authorization: 'Bearer 0010832f-8afe-4295-971a-9214716e2963'
        }
    }).catch(error => {
        console.log('ERROR', error);
    });
    const devs = await response.json();
    for (var i = 0; i < devs.items.length; i++) {
        if (devs.items[i].label == deviceLabel) {
            const rawBody = {
                commands: [
                    {
                        "component": devs.items[i].components.id,
                        "capability": "switch",
                        "command": command,
                        "arguments": [
                        ]
                    }]
            }
            const response = await fetch(`https://api.smartthings.com/v1/devices/${devs.items[i].deviceId}/commands/`, {
                method: 'post',
                body: JSON.stringify(rawBody),
                headers: {
                    Authorization: 'Bearer 0010832f-8afe-4295-971a-9214716e2963'
                },
            })
            const status = await response.json();
            console.log(status)
        }
    }
}

actuateDevice("Candle light 1", "on");
