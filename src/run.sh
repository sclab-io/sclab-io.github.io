#!/usr/bin/env bash

echo "================================================="
echo "RUNNING Language"
echo "en                    : english"
echo "ko                    : korean"
echo "================================================="
read -p "RUNNING Language [en]: " language
language=${language:-en}

pushd ./en
docker run --rm --name slate -p 4567:4567 -v $(pwd)/source:/srv/slate/source slatedocs/slate serve