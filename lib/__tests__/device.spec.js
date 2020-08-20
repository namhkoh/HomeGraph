const { DeviceList, DevicesForRoom } = require('../graphutils/devices');

const deviceQueryFixture = {
  items: [
    {
      deviceId: '0ba76223-b41b-41e3-b609-523660d04374',
      ownerId: null,
      name: 'LIFX Color Bulb',
      label: 'Chrome Lamp',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Chrome Lamp',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'switchLevel',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'colorControl',
              version: 1,
              status: null,
            },
            {
              id: 'sensor',
              version: 1,
              status: null,
            },
            {
              id: 'actuator',
              version: 1,
              status: null,
            },
            {
              id: 'colorTemperature',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'light',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: 'b9f24135-53b1-4ebc-856e-cb4e3cddc05d',
        deviceTypeName: 'LIFX Color Bulb',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: null,
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-LIFX_Color_Bulb',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.light',
    },
    {
      deviceId: '214572e7-2ce3-4f77-ab40-79d27fd49627',
      ownerId: null,
      name: 'Hue go 3 (Hue Extended Color)',
      label: 'Candle 3',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Candle 3',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'switchLevel',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'colorControl',
              version: 1,
              status: null,
            },
            {
              id: 'sensor',
              version: 1,
              status: null,
            },
            {
              id: 'actuator',
              version: 1,
              status: null,
            },
            {
              id: 'colorTemperature',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'light',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-LAN_Hue_Extended_Color',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.light',
    },
    {
      deviceId: '23394620-b5f0-4b36-b37b-e4175b80ce12',
      ownerId: null,
      name: 'Motion Sensor',
      label: 'livingroom_motion_pil',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'livingroom_motion_pil',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
              status: null,
            },
            {
              id: 'battery',
              version: 1,
              status: null,
            },
            {
              id: 'motionSensor',
              version: 1,
              status: null,
            },
            {
              id: 'configuration',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'sensor',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '821425e6-b305-468a-9a27-db0e4852ce3a',
        deviceTypeName: 'SmartSense Motion Sensor',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'generic-motion',
      mnmn: 'SmartThings',
      ocfDeviceType: 'x.com.st.d.sensor.motion',
    },
    {
      deviceId: '2eca2a64-ae5a-4647-8bb3-2dec4edbb707',
      ownerId: null,
      name: 'LIFX Color Bulb',
      label: 'back_light_right',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'back_light_right',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'switchLevel',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'colorControl',
              version: 1,
              status: null,
            },
            {
              id: 'sensor',
              version: 1,
              status: null,
            },
            {
              id: 'actuator',
              version: 1,
              status: null,
            },
            {
              id: 'colorTemperature',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'light',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: 'b9f24135-53b1-4ebc-856e-cb4e3cddc05d',
        deviceTypeName: 'LIFX Color Bulb',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: null,
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-LIFX_Color_Bulb',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.light',
    },
    {
      deviceId: '37a6fdbc-1804-49e2-bb67-6831789e0fd9',
      ownerId: null,
      name: 'ST-3',
      label: 'SmartThings Cam',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'SmartThings Cam',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'motionSensor',
              version: 1,
              status: null,
            },
            {
              id: 'imageCapture',
              version: 1,
              status: null,
            },
            {
              id: 'signalStrength',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'videoCapture',
              version: 1,
              status: null,
            },
            {
              id: 'soundSensor',
              version: 1,
              status: null,
            },
            {
              id: 'videoStream',
              version: 1,
              status: null,
            },
            {
              id: 'audioVolume',
              version: 1,
              status: null,
            },
            {
              id: 'videoClips',
              version: 1,
              status: null,
            },
            {
              id: 'objectDetection',
              version: 1,
              status: null,
            },
            {
              id: 'audioStream',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '73a2eedb-ce4f-458c-a3dc-5d7f5ab4f928',
        deviceTypeName: 'AVPlatform Sercomm RC8335 Pro Camera',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
        hubId: null,
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-AVPlatform_Sercomm_RC8335_Pro_Camera',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.camera',
    },
    {
      deviceId: '3f44c0fa-9a4c-4f5f-ae95-5ed29ff2ce5c',
      ownerId: null,
      name: 'Hue color lamp 1',
      label: 'Torch lamp',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Torch lamp',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'switchLevel',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'colorControl',
              version: 1,
              status: null,
            },
            {
              id: 'sensor',
              version: 1,
              status: null,
            },
            {
              id: 'actuator',
              version: 1,
              status: null,
            },
            {
              id: 'colorTemperature',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'light',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-LAN_Hue_Extended_Color',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.light',
    },
    {
      deviceId: '4089f07f-67de-4949-bfae-7db6b053b2fb',
      ownerId: null,
      name: 'Hue lightstrip plus 1',
      label: 'Hue lightstrip plus 1',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Hue lightstrip plus 1',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'switchLevel',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'colorControl',
              version: 1,
              status: null,
            },
            {
              id: 'sensor',
              version: 1,
              status: null,
            },
            {
              id: 'actuator',
              version: 1,
              status: null,
            },
            {
              id: 'colorTemperature',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'light',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-LAN_Hue_Extended_Color',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.light',
    },
    {
      deviceId: '43a36c8a-daa7-4988-b80c-f00392c63fc7',
      ownerId: null,
      name: 'LIFX Color Bulb',
      label: 'back_light_left',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'back_light_left',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'switchLevel',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'colorControl',
              version: 1,
              status: null,
            },
            {
              id: 'sensor',
              version: 1,
              status: null,
            },
            {
              id: 'actuator',
              version: 1,
              status: null,
            },
            {
              id: 'colorTemperature',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'light',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: 'b9f24135-53b1-4ebc-856e-cb4e3cddc05d',
        deviceTypeName: 'LIFX Color Bulb',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: null,
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-LIFX_Color_Bulb',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.light',
    },
    {
      deviceId: '4719c569-5da1-41ae-a67e-43d99906cd9a',
      ownerId: null,
      name: 'AXIS Gear',
      label: 'AXIS Gear',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'AXIS Gear',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'battery',
              version: 1,
              status: null,
            },
            {
              id: 'configuration',
              version: 1,
              status: null,
            },
            {
              id: 'switchLevel',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'actuator',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'windowShade',
              version: 1,
              status: null,
            },
            {
              id: 'windowShadePreset',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '4eb79802-588f-4307-a334-03cd4b30937b',
        deviceTypeName: 'AXIS Gear ST',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'generic-shade-3',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.blind',
    },
    {
      deviceId: '4d4bfd74-70b8-ad98-2f51-28cc32aa82d9',
      ownerId: null,
      name: 'Galaxy Home (12PR)',
      label: 'Galaxy Home (12PR)',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Galaxy Home (12PR)',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'musicPlayer',
              version: 1,
              status: null,
            },
            {
              id: 'ocf',
              version: 1,
              status: null,
            },
            {
              id: 'audioTrackData',
              version: 1,
              status: null,
            },
            {
              id: 'audioVolume',
              version: 1,
              status: null,
            },
            {
              id: 'execute',
              version: 1,
              status: null,
            },
            {
              id: 'mediaPlaybackShuffle',
              version: 1,
              status: null,
            },
            {
              id: 'mediaTrackControl',
              version: 1,
              status: null,
            },
            {
              id: 'mediaInputSource',
              version: 1,
              status: null,
            },
            {
              id: 'mediaPlayback',
              version: 1,
              status: null,
            },
            {
              id: 'mediaPlaybackRepeat',
              version: 1,
              status: null,
            },
            {
              id: 'audioTrackAddressing',
              version: 1,
              status: null,
            },
            {
              id: 'audioMute',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '1e2e854c-a6d9-4079-8a67-398c79e04418',
        deviceTypeName: 'Samsung OCF Network Audio Player',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: null,
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-Samsung_OCF_Network_Audio_Player',
      mnmn: 'SmartThings',
      ocfDeviceType: 'x.com.st.d.networkaudio',
    },
    {
      deviceId: '4fcfc464-1d5e-4de6-a7e2-cc510a7b49fd',
      ownerId: null,
      name: 'Hue go 1 (Hue Extended Color)',
      label: 'Candle light 1',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Candle light 1',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'switchLevel',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'colorControl',
              version: 1,
              status: null,
            },
            {
              id: 'sensor',
              version: 1,
              status: null,
            },
            {
              id: 'actuator',
              version: 1,
              status: null,
            },
            {
              id: 'colorTemperature',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'light',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-LAN_Hue_Extended_Color',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.light',
    },
    {
      deviceId: '50a5a1b5-0173-4c7c-9cf6-50b0778b0f4b',
      ownerId: null,
      name: 'Hue brown lamp (Hue Extended Color)',
      label: 'Brown lamp',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Brown lamp',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'switchLevel',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'colorControl',
              version: 1,
              status: null,
            },
            {
              id: 'sensor',
              version: 1,
              status: null,
            },
            {
              id: 'actuator',
              version: 1,
              status: null,
            },
            {
              id: 'colorTemperature',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'light',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-LAN_Hue_Extended_Color',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.light',
    },
    {
      deviceId: '5242710a-0ad6-4484-b4cc-5ec8427e9a4d',
      ownerId: null,
      name: '[TV] Samsung Q70 Series (55)',
      label: 'living room TV',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'living room TV',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'ocf',
              version: 1,
              status: null,
            },
            {
              id: 'tvChannel',
              version: 1,
              status: null,
            },
            {
              id: 'audioVolume',
              version: 1,
              status: null,
            },
            {
              id: 'execute',
              version: 1,
              status: null,
            },
            {
              id: 'mediaInputSource',
              version: 1,
              status: null,
            },
            {
              id: 'mediaPlayback',
              version: 1,
              status: null,
            },
            {
              id: 'audioMute',
              version: 1,
              status: null,
            },
            {
              id: 'custom.error',
              version: 1,
              status: null,
            },
            {
              id: 'custom.picturemode',
              version: 1,
              status: null,
            },
            {
              id: 'custom.soundmode',
              version: 1,
              status: null,
            },
            {
              id: 'custom.accessibility',
              version: 1,
              status: null,
            },
            {
              id: 'custom.launchapp',
              version: 1,
              status: null,
            },
            {
              id: 'custom.recording',
              version: 1,
              status: null,
            },
            {
              id: 'custom.tvsearch',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: 'ae486700-750b-4d72-bc7f-a119dccc3e9b',
        deviceTypeName: 'Samsung OCF TV',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: null,
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-Samsung_OCF_TV',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.switch',
    },
    {
      deviceId: '594fb2d9-e6a6-3925-e27d-3523e11229c3',
      ownerId: null,
      name: '[robot vacuum] Samsung',
      label: 'Robot vacuum',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Robot vacuum',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'battery',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'ocf',
              version: 1,
              status: null,
            },
            {
              id: 'execute',
              version: 1,
              status: null,
            },
            {
              id: 'remoteControlStatus',
              version: 1,
              status: null,
            },
            {
              id: 'robotCleanerCleaningMode',
              version: 1,
              status: null,
            },
            {
              id: 'robotCleanerMovement',
              version: 1,
              status: null,
            },
            {
              id: 'robotCleanerTurboMode',
              version: 1,
              status: null,
            },
            {
              id: 'custom.error',
              version: 1,
              status: null,
            },
            {
              id: 'custom.disabledCapabilities',
              version: 1,
              status: null,
            },
            {
              id: 'custom.dthVersion',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerSmartTurboMode',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerSoundSet',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerSmartControl',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerRepeatCleanOption',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerBatteryFullStatus',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerRepeatCleanSupport',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerSuctionType',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerHistorySupport',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerEnergyMonitorSupport',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerReserveCleanType',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerHrmSupport',
              version: 1,
              status: null,
            },
            {
              id: 'custom.robotCleanerBehavior',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '239c1c7d-123c-4eaa-b65a-6013ef4f18fc',
        deviceTypeName: 'Samsung OCF Robot Vacuum',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
        hubId: null,
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-Samsung_OCF_Robot_Vacuum',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.switch',
    },
    {
      deviceId: '5e11a606-302b-a601-5a80-a52c84cb0c69',
      ownerId: null,
      name: 'Smart Plug',
      label: 'Fan',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Fan',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'energyMeter',
              version: 1,
              status: null,
            },
            {
              id: 'powerMeter',
              version: 1,
              status: null,
            },
            {
              id: 'ocf',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '942b2f8e-c743-4af1-9170-0b7660df7a14',
        deviceTypeName: 'Samsung OCF Smart Plug',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
        hubId: null,
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-Samsung_OCF_Smart_Plug',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.switch',
    },
    {
      deviceId: '61fcbe8c-4f02-4ea9-9e33-383866025bc7',
      ownerId: null,
      name: '[Samsung] M7',
      label: '[AV] [Samsung] M7',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: '[AV] [Samsung] M7',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'musicPlayer',
              version: 1,
              status: null,
            },
            {
              id: 'sensor',
              version: 1,
              status: null,
            },
            {
              id: 'actuator',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'audioNotification',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: 'c3f7bcb0-ed05-4342-bb68-32d7ba2934d9',
        deviceTypeName: 'LAN SamsungAudio',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-LAN_SamsungAudio',
      mnmn: 'SmartThings',
      ocfDeviceType: 'x.com.st.d.networkaudio',
    },
    {
      deviceId: '6efd2fbb-6318-9ddf-45df-bb345311d453',
      ownerId: null,
      name: '[floor a/c] Samsung',
      label: 'Floor air conditioner',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Floor air conditioner',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
              status: null,
            },
            {
              id: 'relativeHumidityMeasurement',
              version: 1,
              status: null,
            },
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'thermostatCoolingSetpoint',
              version: 1,
              status: null,
            },
            {
              id: 'ocf',
              version: 1,
              status: null,
            },
            {
              id: 'audioVolume',
              version: 1,
              status: null,
            },
            {
              id: 'execute',
              version: 1,
              status: null,
            },
            {
              id: 'remoteControlStatus',
              version: 1,
              status: null,
            },
            {
              id: 'airQualitySensor',
              version: 1,
              status: null,
            },
            {
              id: 'odorSensor',
              version: 1,
              status: null,
            },
            {
              id: 'dustSensor',
              version: 1,
              status: null,
            },
            {
              id: 'airConditionerMode',
              version: 1,
              status: null,
            },
            {
              id: 'demandResponseLoadControl',
              version: 1,
              status: null,
            },
            {
              id: 'powerConsumptionReport',
              version: 1,
              status: null,
            },
            {
              id: 'airConditionerFanMode',
              version: 1,
              status: null,
            },
            {
              id: 'airFlowDirection',
              version: 1,
              status: null,
            },
            {
              id: 'veryFineDustSensor',
              version: 1,
              status: null,
            },
            {
              id: 'custom.deviceDependencyStatus',
              version: 1,
              status: null,
            },
            {
              id: 'custom.error',
              version: 1,
              status: null,
            },
            {
              id: 'custom.disabledCapabilities',
              version: 1,
              status: null,
            },
            {
              id: 'custom.thermostatSetpointControl',
              version: 1,
              status: null,
            },
            {
              id: 'custom.airConditionerOptionalMode',
              version: 1,
              status: null,
            },
            {
              id: 'custom.airConditionerTropicalNightMode',
              version: 1,
              status: null,
            },
            {
              id: 'custom.autoCleaningMode',
              version: 1,
              status: null,
            },
            {
              id: 'custom.dthVersion',
              version: 1,
              status: null,
            },
            {
              id: 'custom.energyType',
              version: 1,
              status: null,
            },
            {
              id: 'custom.spiMode',
              version: 1,
              status: null,
            },
            {
              id: 'custom.deviceReportStateConfiguration',
              version: 1,
              status: null,
            },
            {
              id: 'custom.deodorFilter',
              version: 1,
              status: null,
            },
            {
              id: 'custom.dustFilter',
              version: 1,
              status: null,
            },
            {
              id: 'custom.airConditionerOdorController',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: 'f3dd55ff-cd71-4961-8a14-081dae506ebd',
        deviceTypeName: 'Samsung OCF Air Conditioner',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
        hubId: null,
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-Samsung_OCF_Air_Conditioner',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.switch',
    },
    {
      deviceId: '71419cfd-f55e-48ea-8285-4f6e3a14438d',
      ownerId: null,
      name: 'Hue go 2 (Hue Extended Color)',
      label: 'Candle light 2',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Candle light 2',
          capabilities: [
            {
              id: 'switch',
              version: 1,
              status: null,
            },
            {
              id: 'switchLevel',
              version: 1,
              status: null,
            },
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'colorControl',
              version: 1,
              status: null,
            },
            {
              id: 'sensor',
              version: 1,
              status: null,
            },
            {
              id: 'actuator',
              version: 1,
              status: null,
            },
            {
              id: 'colorTemperature',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'light',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-LAN_Hue_Extended_Color',
      mnmn: 'SmartThings',
      ocfDeviceType: 'oic.d.light',
    },
    {
      deviceId: 'a090218b-845e-40cb-be0e-65234e47303a',
      ownerId: null,
      name: 'Hue 4D8238',
      label: 'Hue 4D8238',
      deviceManufacturerCode: null,
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      components: [
        {
          id: 'main',
          label: 'Hue 4D8238',
          capabilities: [
            {
              id: 'refresh',
              version: 1,
              status: null,
            },
            {
              id: 'healthCheck',
              version: 1,
              status: null,
            },
            {
              id: 'bridge',
              version: 1,
              status: null,
            },
          ],
          categories: [],
        },
      ],
      childDevices: [],
      profile: null,
      app: null,
      ble: null,
      bleD2D: null,
      dth: {
        deviceTypeId: '79f0556c-51e6-4b3d-aaa9-1f1acbe2a7cd',
        deviceTypeName: 'LAN Hue Bridge',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      hub: null,
      mobile: null,
      ir: null,
      irOcf: null,
      viper: null,
      type: 'DTH',
      vid: 'SmartThings-smartthings-LAN_Hue_Bridge',
      mnmn: 'SmartThings',
      ocfDeviceType: 'x.com.st.d.bridge',
    },
  ],
  _links: {
    next: null,
    previous: null,
  },
};

const deviceByTypeFixture = {
  items: [
    {
      deviceId: '80b747ae-b136-4f14-a442-bd9165f2e398',
      name: '[TV] Samsung 7 Series (40)',
      label: '[TV] Samsung 7 Series (40)',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'e61a36cf-7837-4357-a756-e9429743d674',
      deviceTypeId: 'ae486700-750b-4d72-bc7f-a119dccc3e9b',
      deviceTypeName: 'Samsung OCF TV',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: '[TV] Samsung 7 Series (40)',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'ocf',
              version: 1,
            },
            {
              id: 'tvChannel',
              version: 1,
            },
            {
              id: 'audioVolume',
              version: 1,
            },
            {
              id: 'execute',
              version: 1,
            },
            {
              id: 'mediaInputSource',
              version: 1,
            },
            {
              id: 'mediaPlayback',
              version: 1,
            },
            {
              id: 'audioMute',
              version: 1,
            },
            {
              id: 'custom.error',
              version: 1,
            },
            {
              id: 'custom.picturemode',
              version: 1,
            },
            {
              id: 'custom.soundmode',
              version: 1,
            },
            {
              id: 'custom.accessibility',
              version: 1,
            },
            {
              id: 'custom.launchapp',
              version: 1,
            },
            {
              id: 'custom.recording',
              version: 1,
            },
            {
              id: 'custom.tvsearch',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: 'ae486700-750b-4d72-bc7f-a119dccc3e9b',
        deviceTypeName: 'Samsung OCF TV',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '5242710a-0ad6-4484-b4cc-5ec8427e9a4d',
      name: '[TV] Samsung Q70 Series (55)',
      label: 'living room TV',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: 'ae486700-750b-4d72-bc7f-a119dccc3e9b',
      deviceTypeName: 'Samsung OCF TV',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'living room TV',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'ocf',
              version: 1,
            },
            {
              id: 'tvChannel',
              version: 1,
            },
            {
              id: 'audioVolume',
              version: 1,
            },
            {
              id: 'execute',
              version: 1,
            },
            {
              id: 'mediaInputSource',
              version: 1,
            },
            {
              id: 'mediaPlayback',
              version: 1,
            },
            {
              id: 'audioMute',
              version: 1,
            },
            {
              id: 'custom.error',
              version: 1,
            },
            {
              id: 'custom.picturemode',
              version: 1,
            },
            {
              id: 'custom.soundmode',
              version: 1,
            },
            {
              id: 'custom.accessibility',
              version: 1,
            },
            {
              id: 'custom.launchapp',
              version: 1,
            },
            {
              id: 'custom.recording',
              version: 1,
            },
            {
              id: 'custom.tvsearch',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: 'ae486700-750b-4d72-bc7f-a119dccc3e9b',
        deviceTypeName: 'Samsung OCF TV',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: 'd713324b-dca1-4d1b-b2e7-59ebfc4af6f1',
      name: 'Multipurpose front door',
      label: 'FrontDoor',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: '660d725a-618f-40cb-8ac7-47a9ecb7710f',
      deviceTypeId: '52517166-43f9-4cbf-8bc2-7da4e8df5614',
      deviceTypeName: 'SmartSense Multi Sensor',
      deviceNetworkType: 'ZIGBEE',
      components: [
        {
          id: 'main',
          label: 'FrontDoor',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'contactSensor',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'threeAxis',
              version: 1,
            },
            {
              id: 'accelerationSensor',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '52517166-43f9-4cbf-8bc2-7da4e8df5614',
        deviceTypeName: 'SmartSense Multi Sensor',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: 'ef3dc8ec-0a16-41fb-b68b-749095eee742',
      name: 'Mobile Presence made by Android',
      label: "AI HOME's Galaxy Note10+",
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
      deviceTypeName: 'Mobile Presence',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: "AI HOME's Galaxy Note10+",
          capabilities: [
            {
              id: 'presenceSensor',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'occupancySensor',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
        deviceTypeName: 'Mobile Presence',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '4b31e9c4-6c2b-4071-1328-82db4f475faa',
      name: '[dishwasher] Samsung',
      label: 'Dishwasher',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: '4f4c4486-a36e-4e52-b38f-0bf2dea99ed2',
      deviceTypeId: '6299fe23-0573-49f4-acf4-8d00c0dbbf78',
      deviceTypeName: 'Samsung OCF Dishwasher',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Dishwasher',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'ocf',
              version: 1,
            },
            {
              id: 'execute',
              version: 1,
            },
            {
              id: 'remoteControlStatus',
              version: 1,
            },
            {
              id: 'dishwasherOperatingState',
              version: 1,
            },
            {
              id: 'powerConsumptionReport',
              version: 1,
            },
            {
              id: 'custom.error',
              version: 1,
            },
            {
              id: 'custom.disabledCapabilities',
              version: 1,
            },
            {
              id: 'custom.dthVersion',
              version: 1,
            },
            {
              id: 'custom.dishwasherOperatingProgress',
              version: 1,
            },
            {
              id: 'custom.dishwasherOperatingSuppProgress',
              version: 1,
            },
            {
              id: 'custom.dishwasherOperatingPercentage',
              version: 1,
            },
            {
              id: 'custom.dishwasherDelayStartTime',
              version: 1,
            },
            {
              id: 'custom.dishwasherKidsLock',
              version: 1,
            },
            {
              id: 'custom.dishwasherDiagnosis',
              version: 1,
            },
            {
              id: 'custom.dishwasherSuppSelectedZone',
              version: 1,
            },
            {
              id: 'custom.dishwasherSelectedZone',
              version: 1,
            },
            {
              id: 'custom.dishwasherSuppZoneBooster',
              version: 1,
            },
            {
              id: 'custom.dishwasherZoneBooster',
              version: 1,
            },
            {
              id: 'custom.dishwasherSuppSpeedBooster',
              version: 1,
            },
            {
              id: 'custom.dishwasherSpeedBooster',
              version: 1,
            },
            {
              id: 'custom.dishwasherSuppSanitize',
              version: 1,
            },
            {
              id: 'custom.dishwasherSanitize',
              version: 1,
            },
            {
              id: 'custom.dishwasherSuppHighTempDry',
              version: 1,
            },
            {
              id: 'custom.dishwasherHighTempDry',
              version: 1,
            },
            {
              id: 'custom.dishwasherSuppOptions',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '6299fe23-0573-49f4-acf4-8d00c0dbbf78',
        deviceTypeName: 'Samsung OCF Dishwasher',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: 'a090218b-845e-40cb-be0e-65234e47303a',
      name: 'Hue 4D8238',
      label: 'Hue 4D8238',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '79f0556c-51e6-4b3d-aaa9-1f1acbe2a7cd',
      deviceTypeName: 'LAN Hue Bridge',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Hue 4D8238',
          capabilities: [
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'bridge',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '79f0556c-51e6-4b3d-aaa9-1f1acbe2a7cd',
        deviceTypeName: 'LAN Hue Bridge',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '60cf32cc-d612-4142-0d9e-a3d8ec204d91',
      name: '[refrigerator] Samsung (LCD)',
      label: 'REFRIGERATOR',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: '4f4c4486-a36e-4e52-b38f-0bf2dea99ed2',
      deviceTypeId: '5ce8f920-4075-4a14-b513-497b12d85f10',
      deviceTypeName: 'Samsung OCF Refrigerator',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'REFRIGERATOR',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'contactSensor',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'ocf',
              version: 1,
            },
            {
              id: 'refrigeration',
              version: 1,
            },
            {
              id: 'filterStatus',
              version: 1,
            },
            {
              id: 'execute',
              version: 1,
            },
            {
              id: 'powerConsumptionReport',
              version: 1,
            },
            {
              id: 'custom.error',
              version: 1,
            },
            {
              id: 'custom.disabledCapabilities',
              version: 1,
            },
            {
              id: 'custom.dthVersion',
              version: 1,
            },
            {
              id: 'custom.deviceReportStateConfiguration',
              version: 1,
            },
            {
              id: 'custom.deodorFilter',
              version: 1,
            },
            {
              id: 'custom.waterFilter',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '5ce8f920-4075-4a14-b513-497b12d85f10',
        deviceTypeName: 'Samsung OCF Refrigerator',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '07b9b4df-e33b-4520-88ad-3c3dbd5e3b19',
      name: 'Schlage Touchscreen Deadbolt Door Lock',
      label: 'Schlage Touchscreen Deadbolt Door Lock',
      deviceManufacturerCode: '003B-6341-5044',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'bcef6653-74f2-4d36-9d0d-185f1b3bb94f',
      deviceTypeId: '8a2a823b3c988884013c98891a8a0003',
      deviceTypeName: 'Z-Wave Lock',
      deviceNetworkType: 'ZWAVE',
      components: [
        {
          id: 'main',
          capabilities: [
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'polling',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'lock',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'lockCodes',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '8a2a823b3c988884013c98891a8a0003',
        deviceTypeName: 'Z-Wave Lock',
        deviceNetworkType: 'ZWAVE',
        completedSetup: true,
        networkSecurityLevel: 'ZWAVE_S0_LEGACY',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '6efd2fbb-6318-9ddf-45df-bb345311d453',
      name: '[floor a/c] Samsung',
      label: 'Floor air conditioner',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: 'f3dd55ff-cd71-4961-8a14-081dae506ebd',
      deviceTypeName: 'Samsung OCF Air Conditioner',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Floor air conditioner',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'relativeHumidityMeasurement',
              version: 1,
            },
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'thermostatCoolingSetpoint',
              version: 1,
            },
            {
              id: 'ocf',
              version: 1,
            },
            {
              id: 'audioVolume',
              version: 1,
            },
            {
              id: 'execute',
              version: 1,
            },
            {
              id: 'remoteControlStatus',
              version: 1,
            },
            {
              id: 'airQualitySensor',
              version: 1,
            },
            {
              id: 'odorSensor',
              version: 1,
            },
            {
              id: 'dustSensor',
              version: 1,
            },
            {
              id: 'airConditionerMode',
              version: 1,
            },
            {
              id: 'demandResponseLoadControl',
              version: 1,
            },
            {
              id: 'powerConsumptionReport',
              version: 1,
            },
            {
              id: 'airConditionerFanMode',
              version: 1,
            },
            {
              id: 'airFlowDirection',
              version: 1,
            },
            {
              id: 'veryFineDustSensor',
              version: 1,
            },
            {
              id: 'custom.deviceDependencyStatus',
              version: 1,
            },
            {
              id: 'custom.error',
              version: 1,
            },
            {
              id: 'custom.disabledCapabilities',
              version: 1,
            },
            {
              id: 'custom.thermostatSetpointControl',
              version: 1,
            },
            {
              id: 'custom.airConditionerOptionalMode',
              version: 1,
            },
            {
              id: 'custom.airConditionerTropicalNightMode',
              version: 1,
            },
            {
              id: 'custom.autoCleaningMode',
              version: 1,
            },
            {
              id: 'custom.dthVersion',
              version: 1,
            },
            {
              id: 'custom.energyType',
              version: 1,
            },
            {
              id: 'custom.spiMode',
              version: 1,
            },
            {
              id: 'custom.deviceReportStateConfiguration',
              version: 1,
            },
            {
              id: 'custom.deodorFilter',
              version: 1,
            },
            {
              id: 'custom.dustFilter',
              version: 1,
            },
            {
              id: 'custom.airConditionerOdorController',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: 'f3dd55ff-cd71-4961-8a14-081dae506ebd',
        deviceTypeName: 'Samsung OCF Air Conditioner',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: 'f77150d9-7967-4384-873d-f400706b5e3d',
      name: 'BeSense Motion Test Device',
      label: 'BedroomMotion',
      deviceManufacturerCode: '0214-0003-0002',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'e61a36cf-7837-4357-a756-e9429743d674',
      deviceTypeId: '34e7c55a-5d0e-4dc6-8da4-96cdc83b84cb',
      deviceTypeName: 'Z-Wave Motion Sensor',
      deviceNetworkType: 'ZWAVE',
      components: [
        {
          id: 'main',
          label: 'BedroomMotion',
          capabilities: [
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'motionSensor',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'tamperAlert',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '34e7c55a-5d0e-4dc6-8da4-96cdc83b84cb',
        deviceTypeName: 'Z-Wave Motion Sensor',
        deviceNetworkType: 'ZWAVE',
        completedSetup: true,
        networkSecurityLevel: 'ZWAVE_LEGACY_NON_SECURE',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: 'f1b02d34-02cd-420e-84b4-78569d5bb439',
      name: "Gene Becker's gene’s iPhone",
      label: "Gene Becker's gene’s iPhone",
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
      deviceTypeName: 'Mobile Presence',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          capabilities: [
            {
              id: 'presenceSensor',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'occupancySensor',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
        deviceTypeName: 'Mobile Presence',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: 'c0bb4293-6805-4edc-9f26-f6535dc29e22',
      name: 'Mobile Presence made by Android',
      label: "AI HOME's Galaxy Note10+",
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
      deviceTypeName: 'Mobile Presence',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: "AI HOME's Galaxy Note10+",
          capabilities: [
            {
              id: 'presenceSensor',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'occupancySensor',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
        deviceTypeName: 'Mobile Presence',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '275dc696-d836-49ed-a906-7776b0cad376',
      name: 'Mobile Presence made by Android',
      label: "AI HOME's Galaxy Note9",
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
      deviceTypeName: 'Mobile Presence',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: "AI HOME's Galaxy Note9",
          capabilities: [
            {
              id: 'presenceSensor',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'occupancySensor',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
        deviceTypeName: 'Mobile Presence',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '3c968e11-a015-46d3-9d70-4dccda0224f7',
      name: 'Mobile Presence made by Android',
      label: "Xinyao Wang's Galaxy S10",
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
      deviceTypeName: 'Mobile Presence',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: "Xinyao Wang's Galaxy S10",
          capabilities: [
            {
              id: 'presenceSensor',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'occupancySensor',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
        deviceTypeName: 'Mobile Presence',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: 'bac13d24-5d91-464a-ae55-371c9ab4ad2e',
      name: 'Button',
      label: 'button action reset',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: '4f4c4486-a36e-4e52-b38f-0bf2dea99ed2',
      deviceTypeId: '7474b275-7313-4149-867e-4fa93fdd5c98',
      deviceTypeName: 'SmartSense Button',
      deviceNetworkType: 'ZIGBEE',
      components: [
        {
          id: 'main',
          label: 'button action reset',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'button',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'holdableButton',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '7474b275-7313-4149-867e-4fa93fdd5c98',
        deviceTypeName: 'SmartSense Button',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '27a1e0b0-f07c-4255-a2dd-eeedc6205e3e',
      name: 'LIFX Color Bulb',
      label: 'Left Lamp',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'e61a36cf-7837-4357-a756-e9429743d674',
      deviceTypeId: 'b9f24135-53b1-4ebc-856e-cb4e3cddc05d',
      deviceTypeName: 'LIFX Color Bulb',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Left Lamp',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'colorControl',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'colorTemperature',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'light',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: 'b9f24135-53b1-4ebc-856e-cb4e3cddc05d',
        deviceTypeName: 'LIFX Color Bulb',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '1553d6b4-4e1f-40da-a218-cbf9890f1d88',
      name: 'Button',
      label: 'button light action',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: '4f4c4486-a36e-4e52-b38f-0bf2dea99ed2',
      deviceTypeId: '7474b275-7313-4149-867e-4fa93fdd5c98',
      deviceTypeName: 'SmartSense Button',
      deviceNetworkType: 'ZIGBEE',
      components: [
        {
          id: 'main',
          label: 'button light action',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'button',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'holdableButton',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '7474b275-7313-4149-867e-4fa93fdd5c98',
        deviceTypeName: 'SmartSense Button',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '4d4bfd74-70b8-ad98-2f51-28cc32aa82d9',
      name: 'Galaxy Home (12PR)',
      label: 'Galaxy Home (12PR)',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '1e2e854c-a6d9-4079-8a67-398c79e04418',
      deviceTypeName: 'Samsung OCF Network Audio Player',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Galaxy Home (12PR)',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'musicPlayer',
              version: 1,
            },
            {
              id: 'ocf',
              version: 1,
            },
            {
              id: 'audioTrackData',
              version: 1,
            },
            {
              id: 'audioVolume',
              version: 1,
            },
            {
              id: 'execute',
              version: 1,
            },
            {
              id: 'mediaPlaybackShuffle',
              version: 1,
            },
            {
              id: 'mediaTrackControl',
              version: 1,
            },
            {
              id: 'mediaInputSource',
              version: 1,
            },
            {
              id: 'mediaPlayback',
              version: 1,
            },
            {
              id: 'mediaPlaybackRepeat',
              version: 1,
            },
            {
              id: 'audioTrackAddressing',
              version: 1,
            },
            {
              id: 'audioMute',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '1e2e854c-a6d9-4079-8a67-398c79e04418',
        deviceTypeName: 'Samsung OCF Network Audio Player',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '68d04bc9-9581-4ee3-8a0e-12a23c8a05d4',
      name: 'Yale Assure Lock',
      label: 'Yale Assure Lock',
      deviceManufacturerCode: '0129-8002-0600',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'bcef6653-74f2-4d36-9d0d-185f1b3bb94f',
      deviceTypeId: '8a2a823b3c988884013c98891a8a0003',
      deviceTypeName: 'Z-Wave Lock',
      deviceNetworkType: 'ZWAVE',
      components: [
        {
          id: 'main',
          label: 'Yale Assure Lock',
          capabilities: [
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'polling',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'lock',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'lockCodes',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '8a2a823b3c988884013c98891a8a0003',
        deviceTypeName: 'Z-Wave Lock',
        deviceNetworkType: 'ZWAVE',
        completedSetup: true,
        networkSecurityLevel: 'ZWAVE_S0_LEGACY',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '89d775c1-6041-4d5b-ae06-fa03fe3a739d',
      name: 'mqtt test',
      label: 'mqtt test',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'e61a36cf-7837-4357-a756-e9429743d674',
      deviceTypeId: '92fc6b86-3178-49e1-8bfc-ce92297b244a',
      deviceTypeName: 'MQTT Bridge',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'mqtt test',
          capabilities: [
            {
              id: 'notification',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '92fc6b86-3178-49e1-8bfc-ce92297b244a',
        deviceTypeName: 'MQTT Bridge',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '61fcbe8c-4f02-4ea9-9e33-383866025bc7',
      name: '[Samsung] M7',
      label: '[AV] [Samsung] M7',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: 'c3f7bcb0-ed05-4342-bb68-32d7ba2934d9',
      deviceTypeName: 'LAN SamsungAudio',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: '[AV] [Samsung] M7',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'musicPlayer',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'audioNotification',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: 'c3f7bcb0-ed05-4342-bb68-32d7ba2934d9',
        deviceTypeName: 'LAN SamsungAudio',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '438bd1aa-30da-4ad8-95c8-37d24e87b5fd',
      name: '[TV] Samsung Q70 Series (55)',
      label: 'Kitchen TV',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: '4f4c4486-a36e-4e52-b38f-0bf2dea99ed2',
      components: [
        {
          id: 'main',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'audioVolume',
              version: 1,
            },
            {
              id: 'audioMute',
              version: 1,
            },
            {
              id: 'tvChannel',
              version: 1,
            },
            {
              id: 'mediaInputSource',
              version: 1,
            },
            {
              id: 'mediaPlayback',
              version: 1,
            },
            {
              id: 'custom.picturemode',
              version: 1,
            },
            {
              id: 'custom.error',
              version: 1,
            },
            {
              id: 'custom.soundmode',
              version: 1,
            },
            {
              id: 'custom.accessibility',
              version: 1,
            },
            {
              id: 'custom.launchapp',
              version: 1,
            },
            {
              id: 'custom.recording',
              version: 1,
            },
            {
              id: 'custom.tvsearch',
              version: 1,
            },
            {
              id: 'samsungtv.firmwareVersion',
              version: 1,
            },
            {
              id: 'samsungtv.supportsPowerOnByOcf',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'execute',
              version: 1,
            },
            {
              id: 'ocf',
              version: 1,
            },
            {
              id: 'mediaTrackControl',
              version: 1,
            },
          ],
        },
      ],
      profile: {
        id: 'd041cd49-51e0-47c9-8645-b7b3479d7b9c',
      },
      type: 'OCF',
    },
    {
      deviceId: 'e7dcdfec-8e70-4611-8c11-11ef6c053fc3',
      name: 'Mobile Presence made by Android',
      label: "AI HOME's Galaxy S10",
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
      deviceTypeName: 'Mobile Presence',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: "AI HOME's Galaxy S10",
          capabilities: [
            {
              id: 'presenceSensor',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'occupancySensor',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
        deviceTypeName: 'Mobile Presence',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '011276c7-0486-48f7-87a2-c62e813f6993',
      name: 'Mobile Presence made by Android',
      label: "Xinyao Wang's Galaxy S10",
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
      deviceTypeName: 'Mobile Presence',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: "Xinyao Wang's Galaxy S10",
          capabilities: [
            {
              id: 'presenceSensor',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'occupancySensor',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '8a9d4b1e3bfce38a013bfce42d360015',
        deviceTypeName: 'Mobile Presence',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      name: 'SmartThings v3 Hub',
      label: 'SmartThings Hub',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      components: [
        {
          id: 'main',
          capabilities: [
            {
              id: 'bridge',
              version: 1,
            },
          ],
        },
      ],
      childDevices: [
        {
          deviceId: '07b9b4df-e33b-4520-88ad-3c3dbd5e3b19',
        },
        {
          deviceId: '1553d6b4-4e1f-40da-a218-cbf9890f1d88',
        },
        {
          deviceId: '214572e7-2ce3-4f77-ab40-79d27fd49627',
        },
        {
          deviceId: '3f44c0fa-9a4c-4f5f-ae95-5ed29ff2ce5c',
        },
        {
          deviceId: '4089f07f-67de-4949-bfae-7db6b053b2fb',
        },
        {
          deviceId: '4719c569-5da1-41ae-a67e-43d99906cd9a',
        },
        {
          deviceId: '50a5a1b5-0173-4c7c-9cf6-50b0778b0f4b',
        },
        {
          deviceId: '5fe15321-13ab-400f-bfa9-f40e3b598612',
        },
        {
          deviceId: '890b1bcc-9edb-4aec-826c-252e2262ae2e',
        },
        {
          deviceId: 'e970baac-2f1b-4d16-bfad-28b73a4a0980',
        },
        {
          deviceId: 'f77150d9-7967-4384-873d-f400706b5e3d',
        },
      ],
      profile: {
        id: '3e28a82b-ba46-3f7e-80ea-432e23069551',
      },
      type: 'HUB',
    },
    {
      deviceId: '85b8cae7-ee05-464c-9921-26bee4f5d0d5',
      name: 'ButtonName',
      label: 'light_button',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'e61a36cf-7837-4357-a756-e9429743d674',
      deviceTypeId: '7474b275-7313-4149-867e-4fa93fdd5c98',
      deviceTypeName: 'SmartSense Button',
      deviceNetworkType: 'ZIGBEE',
      components: [
        {
          id: 'main',
          label: 'light_button',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'button',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'holdableButton',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '7474b275-7313-4149-867e-4fa93fdd5c98',
        deviceTypeName: 'SmartSense Button',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '0ba76223-b41b-41e3-b609-523660d04374',
      name: 'LIFX Color Bulb',
      label: 'Chrome Lamp',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: 'b9f24135-53b1-4ebc-856e-cb4e3cddc05d',
      deviceTypeName: 'LIFX Color Bulb',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Chrome Lamp',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'colorControl',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'colorTemperature',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'light',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: 'b9f24135-53b1-4ebc-856e-cb4e3cddc05d',
        deviceTypeName: 'LIFX Color Bulb',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '0f7153ad-390c-2f15-5411-003d2fd70aa3',
      name: '[range] Samsung',
      label: 'Range',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: '4f4c4486-a36e-4e52-b38f-0bf2dea99ed2',
      deviceTypeId: 'fb665b45-e929-49a4-b46d-39f82979465d',
      deviceTypeName: 'Samsung OCF Range',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Range',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'thermostatHeatingSetpoint',
              version: 1,
            },
            {
              id: 'ocf',
              version: 1,
            },
            {
              id: 'execute',
              version: 1,
            },
            {
              id: 'ovenOperationalState',
              version: 1,
            },
            {
              id: 'ovenOperatingState',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: 'fb665b45-e929-49a4-b46d-39f82979465d',
        deviceTypeName: 'Samsung OCF Range',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '214572e7-2ce3-4f77-ab40-79d27fd49627',
      name: 'Hue go 3 (Hue Extended Color)',
      label: 'Candle 3',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
      deviceTypeName: 'LAN Hue Extended Color',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Candle 3',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'colorControl',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'colorTemperature',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'light',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '23394620-b5f0-4b36-b37b-e4175b80ce12',
      name: 'Motion Sensor',
      label: 'livingroom_motion_pil',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '821425e6-b305-468a-9a27-db0e4852ce3a',
      deviceTypeName: 'SmartSense Motion Sensor',
      deviceNetworkType: 'ZIGBEE',
      components: [
        {
          id: 'main',
          label: 'livingroom_motion_pil',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'motionSensor',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '821425e6-b305-468a-9a27-db0e4852ce3a',
        deviceTypeName: 'SmartSense Motion Sensor',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '2be831ee-d324-4a45-a371-dd11304018b8',
      name: 'Motion Sensor',
      label: 'door_motion_outside',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: '660d725a-618f-40cb-8ac7-47a9ecb7710f',
      deviceTypeId: '821425e6-b305-468a-9a27-db0e4852ce3a',
      deviceTypeName: 'SmartSense Motion Sensor',
      deviceNetworkType: 'ZIGBEE',
      components: [
        {
          id: 'main',
          label: 'door_motion_outside',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'motionSensor',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '821425e6-b305-468a-9a27-db0e4852ce3a',
        deviceTypeName: 'SmartSense Motion Sensor',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '2eca2a64-ae5a-4647-8bb3-2dec4edbb707',
      name: 'LIFX Color Bulb',
      label: 'back_light_right',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: 'b9f24135-53b1-4ebc-856e-cb4e3cddc05d',
      deviceTypeName: 'LIFX Color Bulb',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'back_light_right',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'colorControl',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'colorTemperature',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'light',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: 'b9f24135-53b1-4ebc-856e-cb4e3cddc05d',
        deviceTypeName: 'LIFX Color Bulb',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '37a6fdbc-1804-49e2-bb67-6831789e0fd9',
      name: 'ST-3',
      label: 'SmartThings Cam',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '73a2eedb-ce4f-458c-a3dc-5d7f5ab4f928',
      deviceTypeName: 'AVPlatform Sercomm RC8335 Pro Camera',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'SmartThings Cam',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'motionSensor',
              version: 1,
            },
            {
              id: 'imageCapture',
              version: 1,
            },
            {
              id: 'signalStrength',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'videoCapture',
              version: 1,
            },
            {
              id: 'soundSensor',
              version: 1,
            },
            {
              id: 'videoStream',
              version: 1,
            },
            {
              id: 'audioVolume',
              version: 1,
            },
            {
              id: 'videoClips',
              version: 1,
            },
            {
              id: 'objectDetection',
              version: 1,
            },
            {
              id: 'audioStream',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '73a2eedb-ce4f-458c-a3dc-5d7f5ab4f928',
        deviceTypeName: 'AVPlatform Sercomm RC8335 Pro Camera',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '3f44c0fa-9a4c-4f5f-ae95-5ed29ff2ce5c',
      name: 'Hue color lamp 1',
      label: 'Torch lamp',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
      deviceTypeName: 'LAN Hue Extended Color',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Torch lamp',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'colorControl',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'colorTemperature',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'light',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '4089f07f-67de-4949-bfae-7db6b053b2fb',
      name: 'Hue lightstrip plus 1',
      label: 'Hue lightstrip plus 1',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
      deviceTypeName: 'LAN Hue Extended Color',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Hue lightstrip plus 1',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'colorControl',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'colorTemperature',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'light',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '43a36c8a-daa7-4988-b80c-f00392c63fc7',
      name: 'LIFX Color Bulb',
      label: 'back_light_left',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: 'b9f24135-53b1-4ebc-856e-cb4e3cddc05d',
      deviceTypeName: 'LIFX Color Bulb',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'back_light_left',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'colorControl',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'colorTemperature',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'light',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: 'b9f24135-53b1-4ebc-856e-cb4e3cddc05d',
        deviceTypeName: 'LIFX Color Bulb',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '4719c569-5da1-41ae-a67e-43d99906cd9a',
      name: 'AXIS Gear',
      label: 'AXIS Gear',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '4eb79802-588f-4307-a334-03cd4b30937b',
      deviceTypeName: 'AXIS Gear ST',
      deviceNetworkType: 'ZIGBEE',
      components: [
        {
          id: 'main',
          label: 'AXIS Gear',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'windowShade',
              version: 1,
            },
            {
              id: 'windowShadePreset',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '4eb79802-588f-4307-a334-03cd4b30937b',
        deviceTypeName: 'AXIS Gear ST',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '49a49fa8-0bbc-df82-0277-4ed8b2697dcc',
      name: 'Smart Plug',
      label: 'Fan',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: '4f4c4486-a36e-4e52-b38f-0bf2dea99ed2',
      deviceTypeId: '942b2f8e-c743-4af1-9170-0b7660df7a14',
      deviceTypeName: 'Samsung OCF Smart Plug',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Fan',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'energyMeter',
              version: 1,
            },
            {
              id: 'powerMeter',
              version: 1,
            },
            {
              id: 'ocf',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '942b2f8e-c743-4af1-9170-0b7660df7a14',
        deviceTypeName: 'Samsung OCF Smart Plug',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '4fcfc464-1d5e-4de6-a7e2-cc510a7b49fd',
      name: 'Hue go 1 (Hue Extended Color)',
      label: 'Candle light 1',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
      deviceTypeName: 'LAN Hue Extended Color',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Candle light 1',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'colorControl',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'colorTemperature',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'light',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '50a5a1b5-0173-4c7c-9cf6-50b0778b0f4b',
      name: 'Hue brown lamp (Hue Extended Color)',
      label: 'Brown lamp',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
      deviceTypeName: 'LAN Hue Extended Color',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Brown lamp',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'colorControl',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'colorTemperature',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'light',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '594fb2d9-e6a6-3925-e27d-3523e11229c3',
      name: '[robot vacuum] Samsung',
      label: 'Robot vacuum',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '239c1c7d-123c-4eaa-b65a-6013ef4f18fc',
      deviceTypeName: 'Samsung OCF Robot Vacuum',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Robot vacuum',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'ocf',
              version: 1,
            },
            {
              id: 'execute',
              version: 1,
            },
            {
              id: 'remoteControlStatus',
              version: 1,
            },
            {
              id: 'robotCleanerCleaningMode',
              version: 1,
            },
            {
              id: 'robotCleanerMovement',
              version: 1,
            },
            {
              id: 'robotCleanerTurboMode',
              version: 1,
            },
            {
              id: 'custom.error',
              version: 1,
            },
            {
              id: 'custom.disabledCapabilities',
              version: 1,
            },
            {
              id: 'custom.dthVersion',
              version: 1,
            },
            {
              id: 'custom.robotCleanerSmartTurboMode',
              version: 1,
            },
            {
              id: 'custom.robotCleanerSoundSet',
              version: 1,
            },
            {
              id: 'custom.robotCleanerSmartControl',
              version: 1,
            },
            {
              id: 'custom.robotCleanerRepeatCleanOption',
              version: 1,
            },
            {
              id: 'custom.robotCleanerBatteryFullStatus',
              version: 1,
            },
            {
              id: 'custom.robotCleanerRepeatCleanSupport',
              version: 1,
            },
            {
              id: 'custom.robotCleanerSuctionType',
              version: 1,
            },
            {
              id: 'custom.robotCleanerHistorySupport',
              version: 1,
            },
            {
              id: 'custom.robotCleanerEnergyMonitorSupport',
              version: 1,
            },
            {
              id: 'custom.robotCleanerReserveCleanType',
              version: 1,
            },
            {
              id: 'custom.robotCleanerHrmSupport',
              version: 1,
            },
            {
              id: 'custom.robotCleanerBehavior',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '239c1c7d-123c-4eaa-b65a-6013ef4f18fc',
        deviceTypeName: 'Samsung OCF Robot Vacuum',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '5e11a606-302b-a601-5a80-a52c84cb0c69',
      name: 'Smart Plug',
      label: 'Fan',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '942b2f8e-c743-4af1-9170-0b7660df7a14',
      deviceTypeName: 'Samsung OCF Smart Plug',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Fan',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'energyMeter',
              version: 1,
            },
            {
              id: 'powerMeter',
              version: 1,
            },
            {
              id: 'ocf',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '942b2f8e-c743-4af1-9170-0b7660df7a14',
        deviceTypeName: 'Samsung OCF Smart Plug',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: false,
        networkSecurityLevel: 'UNKNOWN',
      },
      type: 'DTH',
    },
    {
      deviceId: '5fe15321-13ab-400f-bfa9-f40e3b598612',
      name: 'Hue blue lamp (Hue Extended Color)',
      label: 'Turquoise lamp',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: '4f4c4486-a36e-4e52-b38f-0bf2dea99ed2',
      deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
      deviceTypeName: 'LAN Hue Extended Color',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Turquoise lamp',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'colorControl',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'colorTemperature',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'light',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '71419cfd-f55e-48ea-8285-4f6e3a14438d',
      name: 'Hue go 2 (Hue Extended Color)',
      label: 'Candle light 2',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
      deviceTypeName: 'LAN Hue Extended Color',
      deviceNetworkType: 'UNKNOWN',
      components: [
        {
          id: 'main',
          label: 'Candle light 2',
          capabilities: [
            {
              id: 'switch',
              version: 1,
            },
            {
              id: 'switchLevel',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'colorControl',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'actuator',
              version: 1,
            },
            {
              id: 'colorTemperature',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
            {
              id: 'light',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '437a5fc8-9d28-46cd-a093-ced698498332',
        deviceTypeName: 'LAN Hue Extended Color',
        deviceNetworkType: 'UNKNOWN',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '81f21f52-b155-4a93-8f51-dfb8f44f594c',
      name: 'Motion Sensor',
      label: 'door_motion_inside',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: '660d725a-618f-40cb-8ac7-47a9ecb7710f',
      deviceTypeId: '821425e6-b305-468a-9a27-db0e4852ce3a',
      deviceTypeName: 'SmartSense Motion Sensor',
      deviceNetworkType: 'ZIGBEE',
      components: [
        {
          id: 'main',
          label: 'door_motion_inside',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'motionSensor',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '821425e6-b305-468a-9a27-db0e4852ce3a',
        deviceTypeName: 'SmartSense Motion Sensor',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: '890b1bcc-9edb-4aec-826c-252e2262ae2e',
      name: 'Multipurpose Sensor bathroom',
      label: 'bedroom door',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'e61a36cf-7837-4357-a756-e9429743d674',
      deviceTypeId: '52517166-43f9-4cbf-8bc2-7da4e8df5614',
      deviceTypeName: 'SmartSense Multi Sensor',
      deviceNetworkType: 'ZIGBEE',
      components: [
        {
          id: 'main',
          label: 'bedroom door',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'contactSensor',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'threeAxis',
              version: 1,
            },
            {
              id: 'accelerationSensor',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '52517166-43f9-4cbf-8bc2-7da4e8df5614',
        deviceTypeName: 'SmartSense Multi Sensor',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
    {
      deviceId: 'e970baac-2f1b-4d16-bfad-28b73a4a0980',
      name: 'Motion Sensor bathroom',
      label: 'bedroom motion',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      roomId: 'e61a36cf-7837-4357-a756-e9429743d674',
      deviceTypeId: '821425e6-b305-468a-9a27-db0e4852ce3a',
      deviceTypeName: 'SmartSense Motion Sensor',
      deviceNetworkType: 'ZIGBEE',
      components: [
        {
          id: 'main',
          label: 'bedroom motion',
          capabilities: [
            {
              id: 'temperatureMeasurement',
              version: 1,
            },
            {
              id: 'battery',
              version: 1,
            },
            {
              id: 'motionSensor',
              version: 1,
            },
            {
              id: 'configuration',
              version: 1,
            },
            {
              id: 'refresh',
              version: 1,
            },
            {
              id: 'sensor',
              version: 1,
            },
            {
              id: 'healthCheck',
              version: 1,
            },
          ],
        },
      ],
      dth: {
        deviceTypeId: '821425e6-b305-468a-9a27-db0e4852ce3a',
        deviceTypeName: 'SmartSense Motion Sensor',
        deviceNetworkType: 'ZIGBEE',
        completedSetup: true,
        networkSecurityLevel: 'UNKNOWN',
        hubId: '632e6853-d6e4-40f6-9d75-44032d062e53',
      },
      type: 'DTH',
    },
  ],
  _links: {},
};

describe('DevicesForRoom', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Constructor', () => {
    const subject = new DevicesForRoom();
    expect(subject.devices.length).toEqual(0);
  });

  it('loadDevices adds devices for a room', async () => {
    fetch.mockResponseOnce(JSON.stringify(deviceQueryFixture));
    const subject = new DevicesForRoom();
    await subject.loadDevices({
      locationId: 'fakelocationId',
      roomId: 'fakeroomid',
    });
    expect(subject.devices.length).toEqual(19);
  });

  it('adds all devices for account', async () => {
    fetch.mockResponseOnce(JSON.stringify(deviceQueryFixture));
    const subject = new DeviceList();
    await subject.loadDevices();
    expect(subject.devices.length).toEqual(19);
  });

  it('gets devices of a certain type', async () => {
    fetch.mockResponseOnce(JSON.stringify(deviceByTypeFixture));
    const subject = new DeviceList();
    const resp = await subject.devicesOfType(
      'ae486700-750b-4d72-bc7f-a119dccc3e9b'
    );
    expect(resp.devices.length).toEqual(2);
  });
});
