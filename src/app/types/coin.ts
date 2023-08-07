export interface Coins {
  status: string
  data: Data
}

export interface Data {
  stats: Stats
  coins: Coin[]
}

export interface Stats {
  total: number
  totalCoins: number
  totalMarkets: number
  totalExchanges: number
  totalMarketCap: string
  total24hVolume: string
}

export interface Coin {
  uuid: string
  symbol: string
  name: string
  description: string
  color: string
  iconUrl: string
  websiteUrl: string
  links: Link[]
  supply: Supply
  numberOfMarkets: number
  numberOfExchanges: number
  "24hVolume": string
  marketCap: string
  fullyDilutedMarketCap: string
  price: string
  btcPrice: string
  priceAt: number
  change: string
  rank: number
  sparkline: string[]
  allTimeHigh: AllTimeHigh
  coinrankingUrl: string
  tier: number
  lowVolume: boolean
  listedAt: number
  hasContent: boolean
  notices: any
  tags: string[]
}

export interface Link {
  name: string
  type: string
  url: string
}

export interface Supply {
  confirmed: boolean
  supplyAt: number
  max: string
  total: string
  circulating: string
}

export interface AllTimeHigh {
  price: string
  timestamp: number
}
