#!/bin/bash
i=1
while((i<=15))
do
	echo "cmd1",$1,$i
	let ++i
	sleep 1s
done
