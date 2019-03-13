#!/bin/sh
nohup ./filebeat -e -c filebeat.online.yml > log/filebeat.online.log &
nohup ./filebeat -e -c filebeat.batch.yml > log/filebeat.batch.log &
#####