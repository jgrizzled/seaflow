import { DateTime } from 'luxon';
import dummyData from '../dummy-data.json';

interface Token {
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  ETHprice: number;
  USDprice: number;
  imageURL: string;
}

export interface NFTsaleData {
  name: string;
  imageURL: string;
  openseaURL: string;
  paymentToken: Token;
  paymentAmount: number;
  timestamp: DateTime;
}

// eslint-disable-next-line
async function fetchNewSales_prod(): Promise<NFTsaleData[]> {
  return [];
}

// Mock API implementation
let called = 0;
// eslint-disable-next-line
async function fetchNewSales_mock(): Promise<NFTsaleData[]> {
  const event = dummyData.asset_events[called];
  called++;
  if (!event) return [];
  const t = event.payment_token;
  const token: Token = {
    name: t.name || '',
    symbol: t.symbol,
    address: t.address,
    decimals: t.decimals,
    ETHprice: Number(t.eth_price),
    USDprice: Number(t.usd_price),
    imageURL: t.image_url
  };
  const sale: NFTsaleData = {
    name: event.asset.name,
    imageURL: event.asset.image_preview_url,
    openseaURL: event.asset.permalink,
    paymentToken: token,
    paymentAmount: Number(event.quantity),
    timestamp: DateTime.fromISO(event.transaction.timestamp)
  };
  return [sale];
}

export let fetchNewSales: () => Promise<NFTsaleData[]>;
if (process.env.NODE_ENV == 'test') fetchNewSales = fetchNewSales_mock;
else fetchNewSales = fetchNewSales_prod;
