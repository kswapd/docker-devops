#!/bin/bash
#nohup /home/kxw/dev/docker-devops/icbc-devops/cmd1.sh 2>&1 &
#/home/kxw/dev/docker-devops/icbc-devops/cmd1.sh run

source /home/kxw/dev/docker-devops/icbc-devops/cmd1.sh run
i=100
while(false)
do
	echo "cmd2",$i
	let ++i
	sleep 1s
done
