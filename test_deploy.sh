#!/bin/bash
source /etc/profile
cd /export/test/shikepaiHtml5
git checkout dev
git pull
npm run build