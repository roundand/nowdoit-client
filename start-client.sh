#!/bin/bash
docker build -t nginx_img_1 .
docker run --name client -d -p 80:80 -p 8080:8080 nginx_img_1
sleep 0.5
curl -GET 127.0.0.1:8080/index.html
docker ps
