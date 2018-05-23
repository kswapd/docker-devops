#!/bin/bash
set -e
while true; do
  awk -v now=`date +%s` -v host=`hostname` \
  '{ print "put proc.loadavg.1m " now " " $1 " host=" host;
    print "put proc.loadavg.5m " now " " $2 " host=" host }' /proc/loadavg
  sleep 15
#done | nc -w 30 host.name.of.tsd PORT
done | echo
#chmod +x loadavg-collector.sh
#nohup ./loadavg-collector.sh &
