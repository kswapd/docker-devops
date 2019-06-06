#! /bin/bash
container_name=$1
find_container=`docker ps|grep $container_name`
if [[ -z $find_container ]]; then
 echo "no container" $container_name
else 
 echo "stop and delete container" $container_name
 docker stop $container_name
 docker rm $container_name
fi
docker run --name $container_name -d -p 100:9527  kswapd/oms-cicd-eureka:1.0
