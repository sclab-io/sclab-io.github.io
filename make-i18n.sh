#!/bin/bash
echo "Start copy en to ko"
mkdir -p i18n/ko/docusaurus-plugin-content-docs/current
cp -nr docs/** i18n/ko/docusaurus-plugin-content-docs/current

mkdir -p i18n/ko/docusaurus-plugin-content-blog
cp -nr blog/** i18n/ko/docusaurus-plugin-content-blog

mkdir -p i18n/ko/docusaurus-plugin-content-pages
cp -nr src/pages/**.md i18n/ko/docusaurus-plugin-content-pages