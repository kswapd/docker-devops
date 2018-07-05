APP_JAVA_OPTS="-server -Xms1g -Xmx1g -XX:PermSize=128m -Xss256k
-XX:SurvivorRatio=2
-XX:+PrintGCDetails -XX:+PrintGCTimeStamps -Xloggc:./logs/gc.log
-XX:-HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=./"
echo $APP_JAVA_OPTS
java $APP_JAVA_OPTS apps
