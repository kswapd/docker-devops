#!/bin/bash
set -e
while true; do
  awk -v now=`date +%s` -v host=`hostname` \
  '{ print "put proc.loadavg.1m " now " " $1 " host=" host;
    print "put proc.loadavg.5m " now " " $2 " host=" host }' /proc/loadavg
  sleep 2
done | nc -w 30 127.0.0.1 4242 
#done | echo
#chmod +x import-data-to-opentsdb.sh 
#nohup ./import-data-to-opentsdb.sh &
