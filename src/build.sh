#!/usr/bin/env bash
pushd ./en
docker run --rm --name slate -v $(pwd)/build:/srv/slate/build -v $(pwd)/source:/srv/slate/source slatedocs/slate build
rm -rf ../../en/*
mv build/* ../../en/
pushd ../ko
docker run --rm --name slate -v $(pwd)/build:/srv/slate/build -v $(pwd)/source:/srv/slate/source slatedocs/slate build
rm -rf ../../ko/*
mv build/* ../../ko/
