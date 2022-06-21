#!/usr/bin/env bash

echo "================================================="
echo "RUNNING Language"
echo "en                    : english"
echo "ko                    : korean"
echo "================================================="
read -p "RUNNING Language [en]: " language
language=${language:-en}

case ${language} in
  "en")
    pushd ./en
  ;;
  "ko")
    pushd ./ko
  ;;
esac

docker run --rm --name slate -p 4567:4567 -v $(pwd)/source:/srv/slate/source slatedocs/slate serve