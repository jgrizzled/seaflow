// CoinGecko API utils
import { fetchJSON, constructURL, JSONObject } from './fetch';
const baseURL = process.env.COINGECKO_API_URL || 'http://127.0.0.1:8001/coingecko'; // testing URL

// returns current ETH/USD price
export async function fetchETHUSD(): Promise<number> {
  const params = {
    ids: 'ethereum',
    vs_currencies: 'usd'
  };
  const url = constructURL(baseURL, 'simple/price', params);
  const data = await fetchJSON(url);
  // eslint-disable-next-line
  const price = (data.ethereum as JSONObject)?.usd;
  if (typeof price == 'number') return price;
  throw new Error(`Invalid CoinGecko API response: ${url}`);
}
