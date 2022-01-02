# Sea Flow

Live NFT sales from OpenSea

## Development

### Requirements

- Bash >= 5.0
- Yarn >= 2.0
- Node >= 16.0

### Install

1. `git clone` this repo
2. `cd` into folder
3. `yarn install`

### Set up environment vars

1. `tee .prod.env .dev.env < example.env >/dev/null`
2. Edit env files

### Commands

`yarn dev` to start dev server

`yarn build` to generate production build

`yarn precommit` to run all linting/formatting/testing tasks

### Use Mock API

Serves JSON in mock-data.json

1. Set API_URL=localhost:8000 in .dev.env
2. Start mock API server `yarn mock-server`
3. Start Rollup `yarn dev`

### Use OpenSea Testnet API

Connect to live OpenSea Testnet API

1. Set API_URL=http://localhost:8080/testnets-api.opensea.io:443 in .dev.env
2. Set API_KEY to OpenSea test key (found in docs)
3. Start CORS proxy `yarn cors-proxy`
4. Start Rollup `yarn dev`
