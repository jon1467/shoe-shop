#!/bin/bash

function cleanup {
  echo "shutting down..."
  docker-compose down
}
trap cleanup EXIT

docker-compose up -d db

# Wait for database... could be smarter in the future
sleep 10

docker-compose up -d
docker attach shoe-shop_web_1
