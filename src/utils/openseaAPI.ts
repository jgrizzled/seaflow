// OpenSea API utils

import { DateTime } from 'luxon';
import type { Events, AssetEvent } from './openseaAPI-types';

const baseURL = process.env.API_URL || 'http://localhost:8000';
const headers = new Headers({
  Accept: 'application/json',
  'X-API-KEY': process.env.API_KEY || ''
});
const maxTries = 3;
const retryInterval = 10; // seconds
const retryOn = [503, 429]; // HTTP status codes

// returns up to <limit> events sorted by timestamp desc
export async function fetchSaleEvents(
  afterTimestamp: DateTime,
  limit = 20,
  offset = 0
): Promise<AssetEvent[]> {
  const unixTimestamp = Math.floor(afterTimestamp.toMillis() / 1000);
  const params = {
    event_type: 'successful',
    only_opensea: 'true',
    offset: String(offset),
    limit: String(limit),
    occurred_after: String(unixTimestamp)
  };
  const data = (await request('/events', params)) as Events;
  return data.asset_events;
}

// GET request with retries
export async function request(
  path: string,
  _params: { [key: string]: string } = {} // eslint-disable-next-line
): Promise<any> {
  // combine urls and params
  const url = baseURL + path;
  const params = new URLSearchParams(_params).toString();
  const options = {
    method: 'GET',
    headers
  };
  let response: Response;
  let tries = 0;
  while (tries < maxTries) {
    tries++;
    try {
      response = await fetch(url + '?' + params, options);
    } catch (e) {
      if (tries >= maxTries) throw e;
      console.error(e);
      await timeout(retryInterval);
      continue;
    }
    if (response.ok) {
      // eslint-disable-next-line
      const json = await response.json(); //eslint-disable-next-line
      if (typeof json == 'object') return json;
      throw new Error('OpenSea API invalid response');
    }
    if (!retryOn.includes(response.status)) break;
    console.error(`OpenSea API error ${response.status}: ${response.statusText}`);
    await timeout(retryInterval);
  }
  throw new Error(`Hit OpenSea API max retries`);
}

async function timeout(s: number) {
  return await new Promise(res => setTimeout(res, s * 1000));
}
