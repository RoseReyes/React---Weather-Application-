const getFirstAlbumTitle = require('./album');
const axios = require('axios');

jest.mock('axios');

// test api returning the value we expect
it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album'
      },
      {
        userId: 1,
        id: 2,
        title: 'Album: The Sequel'
      }
    ]
  });

  const title = await getFirstAlbumTitle();
  expect(title).toEqual('My First Album');
});

