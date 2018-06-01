#!/bin/bash

./build.sh
echo "Killing ADB server"
adb kill-server

IP_HOST="$(ifconfig | grep -A 1 'wlp2s0' | tail -1 | cut -d ':' -f 2 | cut -d ' ' -f 1)"


docker rm -f react-native-map-app 
echo "Running react-native-map-app.."

docker  run \
				-it \
				--name react-native-map-app \
				--env NODE_ENV=development \
				-e IP_HOST=$IP_HOST \
				--link map-api-server:API \
				--privileged \
				-v /${PWD}/../://root/app \
       	-p 8081:8081 \
       	react-native-map-app
