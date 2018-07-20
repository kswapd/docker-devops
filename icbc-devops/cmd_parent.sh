#!/bin/bash
export_func(){
  sub="sub"
  export _TEST_8_${sub}=1991
  env
}
#export _TEST_8_=99
i=1
while((i<=3))
do
	echo "cmd1",$1,$i
	let ++i
	sleep 1s
done
export_func
echo $_TEST_8_sub
#source ./cmd_child.sh
./cmd_child.sh
