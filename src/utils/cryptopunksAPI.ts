// TheGraph CryptoPunks API utils

import { DateTime } from 'luxon';
import { gql, GraphQLClient } from 'graphql-request';
import { retryFetch, JSONObject } from './fetch';

const endpoint = process.env.CRYPTOPUNKS_API_URL || 'http://127.0.0.1:8001/cryptopunks'; // testing URL
const client = new GraphQLClient(endpoint, { fetch: retryFetch });

// Last seen sale (default 30d ago)
let lastSale = DateTime.now().minus({ days: 30 });

// fetches new sale events since last seen timestamp
export async function fetchNewSales(): Promise<SaleEvent[]> {
  const newSales = await fetchSaleEvents(lastSale, 20, 0);
  if (newSales.length > 0) {
    lastSale = newSales[0].datetime;
    return newSales;
  }
  lastSale = DateTime.now();
  return [];
}

// returns up to <first> events sorted by timestamp desc
async function fetchSaleEvents(
  after: DateTime,
  first: number,
  skip: number
): Promise<SaleEvent[]> {
  const unixTimestamp = Math.floor(after.toMillis() / 1000);

  const variables = {
    after: unixTimestamp,
    first,
    skip
  };
  // eslint-disable-next-line
  const response = (await client.request(salesQuery, variables)) as JSONObject;
  const rawSales = response.saleEvents as JSONObject[];
  const transformedSales = rawSales.map(transformSaleEvent);

  return transformedSales;
}

export interface SaleEvent {
  name: string;
  datetime: DateTime;
  image_url: string;
  ether: number;
}

/* eslint-disable */
function transformSaleEvent(s: any): SaleEvent {
  const name = s.nft.uri.split('/').at(-1);
  const image_url = `https://www.larvalabs.com/public/images/cryptopunks/punk${name}.png`;
  return {
    name,
    image_url,
    datetime: DateTime.fromMillis(s.timestamp * 1000),
    ether: s.amount / 1e18
  };
}
/* eslint-enable */

const salesQuery = gql`
  query sales($first: Int!, $skip: Int!, $after: Int!) {
    saleEvents(
      first: $first
      skip: $skip
      orderBy: timestamp
      orderDirection: desc
      where: { timestamp_gt: 1 }
    ) {
      nft {
        uri
      }
      timestamp
      amount
    }
  }
`;
