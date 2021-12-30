// Types for OpenSea API responses
// Generated from https://transform.tools/json-to-typescript and cleaned up
/* eslint-disable */
export interface Events {
  asset_events: AssetEvent[];
}

export interface AssetEvent {
  approved_account: Account | null;
  asset: Asset | null;
  asset_bundle: any;
  auction_type: string | null;
  bid_amount: number | null;
  collection_slug: string | null;
  contract_address: string | null;
  created_date: string | null;
  custom_event_name: string | null;
  dev_fee_payment_event: any;
  dev_seller_fee_basis_points: number | null;
  duration: any;
  ending_price: number | null;
  event_type: string | null;
  from_account: Account | null;
  id: number | null;
  is_private: boolean | null;
  owner_account: Account | null;
  payment_token: PaymentToken | null;
  quantity: string | null;
  seller: Seller | null;
  starting_price: number | null;
  to_account: Account | null;
  total_price: string | null;
  transaction: Transaction | null;
  winner_account: Account | null;
  listing_time: string | null;
}

interface Asset {
  id: number | null;
  token_id: string | null;
  num_sales: number | null;
  background_color: string | null;
  image_url: string | null;
  image_preview_url: string | null;
  image_thumbnail_url: string | null;
  image_original_url: string | null;
  animation_url: string | null;
  animation_original_url: string | null;
  name: string | null;
  description: string | null;
  external_link: string | null;
  asset_contract: AssetContract | null;
  permalink: string | null;
  collection: Collection | null;
  decimals: number | null;
  token_metadata: string | null;
  owner: Owner | null;
}

interface AssetContract {
  address: string | null;
  asset_contract_type: string | null;
  created_date: string | null;
  name: string | null;
  nft_version: string | null;
  opensea_version: string | null;
  owner: number | null;
  schema_name: string | null;
  symbol: string | null;
  total_supply: string | null;
  description: string | null;
  external_link: string | null;
  image_url: string | null;
  default_to_fiat: boolean | null;
  dev_buyer_fee_basis_points: number | null;
  dev_seller_fee_basis_points: number | null;
  only_proxied_transfers: boolean | null;
  opensea_buyer_fee_basis_points: number | null;
  opensea_seller_fee_basis_points: number | null;
  buyer_fee_basis_points: number | null;
  seller_fee_basis_points: number | null;
  payout_address: string | null;
}

interface Collection {
  banner_image_url: string | null;
  chat_url: string | null;
  created_date: string | null;
  default_to_fiat: boolean | null;
  description: string | null;
  dev_buyer_fee_basis_points: string | null;
  dev_seller_fee_basis_points: string | null;
  discord_url: string | null;
  display_data: any;
  external_url: string | null;
  featured: boolean | null;
  featured_image_url: string | null;
  hidden: boolean | null;
  safelist_request_status: string | null;
  image_url: string | null;
  is_subject_to_whitelist: boolean | null;
  large_image_url: string | null;
  medium_username: string | null;
  name: string | null;
  only_proxied_transfers: boolean | null;
  opensea_buyer_fee_basis_points: string | null;
  opensea_seller_fee_basis_points: string | null;
  payout_address: string | null;
  require_email: boolean | null;
  short_description: string | null;
  slug: string | null;
  telegram_url: string | null;
  twitter_username: string | null;
  instagram_username: string | null;
  wiki_url: string | null;
}

interface Owner {
  user: User | null;
  profile_img_url: string | null;
  address: string | null;
  config: string | null;
}

interface User {
  username: string | null;
}

interface PaymentToken {
  id: number | null;
  symbol: string | null;
  address: string | null;
  image_url: string | null;
  name: string | null;
  decimals: number | null;
  eth_price: string | null;
  usd_price: string | null;
}

interface Seller {
  user: User | null;
  profile_img_url: string | null;
  address: string | null;
  config: string | null;
}

interface Transaction {
  block_hash: string | null;
  block_number: string | null;
  from_account: Account | null;
  id: number | null;
  timestamp: string | null;
  to_account: Account | null;
  transaction_hash: string | null;
  transaction_index: string | null;
}

interface Account {
  user: User | null;
  profile_img_url: string | null;
  address: string | null;
  config: string | null;
}
