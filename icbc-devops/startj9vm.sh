APP_JAVA_OPTS="-server -Xms1g -Xmx1g -XX:PermSize=128m -Xss256k
-XX:SurvivorRatio=2
-XX:+PrintGCDetails -XX:+PrintGCTimeStamps  -Xverbosegclog:./logs/gc.log -verbose:gc 
-Xdump:java:events=throw,filter=*MemoryError,file=./logs/dump.dmp"
java $APP_JAVA_OPTS apps
