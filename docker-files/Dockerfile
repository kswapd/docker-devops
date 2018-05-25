FROM jboss/base-jdk:8 
ENV TZ "Asia/Shanghai"
USER root
RUN mkdir -p /home/soft/dubbo-demo/dubbo-provider 
ADD target /soft/dubbo-demo/dubbo-provider/target
EXPOSE 20980

ENTRYPOINT exec java -jar /soft/dubbo-demo/dubbo-provider/target/dubbo-provider-1.0-SNAPSHOT.jar
