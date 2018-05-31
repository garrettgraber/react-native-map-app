#!/bin/bash

./build.sh
echo "Killing ADB server"
adb kill-server

docker rm -f react-native-map-app 
echo "Running react-native-map-app.."

docker  run \
				-it \
				--name react-native-map-app \
				--env NODE_ENV=development \
				--link map-api-server:API \
				--privileged \
				-v /${PWD}/../://root/app \
       	-p 8081:8081 \
       	react-native-map-app
