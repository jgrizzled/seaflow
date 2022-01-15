// fetch new NFT sales

import { DateTime } from 'luxon';
import { fetchSaleEvents } from './openseaAPI';
import type { AssetEvent } from './openseaAPI-types';

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

// Last seen timestamp
let lastTimestamp = DateTime.now().minus({ days: 30 });

// fetches new sale events since last seen timestamp
export async function fetchNewSales(): Promise<NFTsaleData[] | undefined> {
  try {
    const newSales = await fetchSaleEvents(lastTimestamp, 20, 0);
    console.log('fetch and new');
    if (newSales.length > 0) {
      lastTimestamp = DateTime.fromISO(newSales[0].transaction?.timestamp as string);
      const tSales = newSales.map(transformSaleEvent);
      return tSales;
    }
    lastTimestamp = DateTime.now();
    return [];
  } catch (e) {
    console.error(e);
  }
}

// Transforms /events JSON response
function transformSaleEvent(e: AssetEvent): NFTsaleData {
  const token: Token = {
    name: e.payment_token?.name || '',
    symbol: e.payment_token?.symbol || '',
    address: e.payment_token?.address || '',
    decimals: e.payment_token?.decimals || 0,
    ETHprice: Number(e.payment_token?.eth_price || 0),
    USDprice: Number(e.payment_token?.usd_price || 0),
    imageURL: e.payment_token?.image_url || ''
  };
  const sale: NFTsaleData = {
    name: e.asset?.name || '',
    imageURL: e.asset?.image_preview_url || '',
    openseaURL: e.asset?.permalink || '',
    paymentToken: token,
    paymentAmount: Number(e.quantity || 0),
    timestamp: DateTime.fromISO(e.transaction?.timestamp as string)
  };
  return sale;
}
