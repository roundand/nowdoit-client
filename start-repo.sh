#!/bin/bash
docker  pull roundand/nowdoit-client
docker run --name repo -d -p 80:80 -p 8080:8080 roundand/nowdoit-client
sleep 0.5
curl -GET 127.0.0.1:8080/index.html
docker ps
