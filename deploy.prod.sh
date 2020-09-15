#!/bin/bash
echo "Exceuting deploy.prod.sh for workfinder_backend"
ssh instance-2.us-central1-a.learned-mind-281610  << 'ENDSSH'
cd ~/apecto
echo "directory changed......"
pm2 delete workfinder_backend_gcp
sudo rm -Rv workfinderbackend
git clone git@github.com:vdshinde36/workfinderbackend.git
echo "cloning staered from git repository......."
cd workfinderbackend
echo "directory changed......"
ls -ls
npm install
pm2 start ecosystem.config.js --env production
exit
ENDSSH