#!/bin/sh
nohup logstash -f galaxy-online.conf > galaxy-online.log &
nohup logstash -f galaxy-batch.conf > galaxy-batch.log &
#####
