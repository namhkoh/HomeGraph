const { Rooms, Room } = require('../graphutils/rooms');

const roomsFixture = {
  items: [
    {
      roomId: 'dffeb7cb-1a1b-4be1-8886-80a577da7947',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      name: 'Living room',
      backgroundImage: null,
    },
    {
      roomId: 'e61a36cf-7837-4357-a756-e9429743d674',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      name: 'Bedroom',
      backgroundImage: null,
    },
    {
      roomId: 'bcef6653-74f2-4d36-9d0d-185f1b3bb94f',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      name: 'Outdoor',
      backgroundImage: null,
    },
    {
      roomId: '660d725a-618f-40cb-8ac7-47a9ecb7710f',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      name: 'Smart Door',
      backgroundImage: null,
    },
    {
      roomId: '4f4c4486-a36e-4e52-b38f-0bf2dea99ed2',
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      name: 'Kitchen',
      backgroundImage: null,
    },
  ],
  _links: null,
};

describe('Rooms', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Constructor', () => {
    const subject = new Rooms();
    expect(subject.rooms.length).toEqual(0);
  });

  it('adds rooms for a location', async () => {
    fetch.mockResponse(JSON.stringify(roomsFixture));
    const subject = new Rooms();
    await subject.loadRooms('fakelocationID');
    expect(subject.rooms.length).toEqual(5);
  });
});
