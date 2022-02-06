import { fetchNewSales } from '../utils/cryptopunksAPI';

test('fetches sale events', async () => {
  const data = await fetchNewSales();
  expect(typeof data[0].image_url).toBe('string');
});
