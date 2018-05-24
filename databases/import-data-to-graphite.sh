PORT=2003
SERVER=localhost
#echo "proc.loadavg.1m  4 `date +%s`" | nc -q0 ${SERVER} ${PORT}
set -e
while true; do
  awk -v now=`date +%s` -v host=`hostname` \
  '{ print "proc.loadavg.1m "  $1 " " now 
    }' /proc/loadavg
  sleep 2
done |  nc -q0 ${SERVER} ${PORT}
