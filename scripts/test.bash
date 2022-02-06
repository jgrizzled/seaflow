#!/usr/bin/env bash
# Starts mock JSON server and runs tests
# Run from parent folder

yarn run mock-json-server mock-data.json --port=8001 &
SERVER_PID=$!
yarn run jest --bail
echo "Stopping JSON Server"
kill $SERVER_PID