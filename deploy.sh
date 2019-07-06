#!/bin/bash
source /etc/profile
cd /export/web/shikepaiHtml5
git checkout master
git pull
npm run build