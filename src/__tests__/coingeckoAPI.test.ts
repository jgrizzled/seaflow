import { fetchETHUSD } from '../utils/coingeckoAPI';

test('fetches ETH/USD price', async () => {
  const data = await fetchETHUSD();
  expect(typeof data).toBe('number');
});
