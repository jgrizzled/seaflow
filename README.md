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

### Develop

`yarn dev` to start dev server

`yarn build` to generate production build

`yarn precommit` to run all linting/formatting/testing tasks

`yarn mock-server` to run mock OpenSea API JSON server
