const getPhotos = require('../src/client');

let TEST_IDS = ['WG639VkTjmK5dzydd1BBJA', '16ZnHpuaaBt92XWeJHCC5A', 'OCTiJwvjoK81WoDwsTkFvA'];
let testClient = null;

test('It returns a list of photos', async () => {
  const photoArrays = [];
  for (const id of TEST_IDS) {
    const photos = await getPhotos(id, { tab: 'food' });
    console.log(photos);
    photoArrays.push(photos);
  }

  for (const photoArray of photoArrays) {
    expect(photoArray.length).toBeGreaterThan(0);
    for (const photo of photoArray) {
      expect(photo).toBeTruthy();
      expect(photo.thumbnail).toBeTruthy();
      expect(photo.thumbnail.endsWith('.jpg') || photo.thumbnail.endsWith('.jpeg') || photo.thumbnail.endsWith('.png')).toBe(true);
    }
  }
}, 10000);
