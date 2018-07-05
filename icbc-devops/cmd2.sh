#!/bin/bash
i=100
while(true)
do
	echo "cmd2",$i
	let ++i
	sleep 1s
done
