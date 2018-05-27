#!/bin/bash

echo "Bootstrap is running..."
echo "Link in preinstalled packages...";
# rm -rf /root/app/node_modules
# ln -s /root/node_modules /root/app/node_modules
echo "npm start the app...";

echo "Current directory: $PWD"
ls

rm /root/package.json
rm /root/app/docker/package.json


cd /root/app
npm ls --depth=0

echo "Current directory: $PWD"
ls

which npm
which node
which bash

npm ls --depth=0


#/usr/local/bin/npm start > /root/app/app.log 2>&1 &
# echo "Launch the SSHD server...";
# /usr/sbin/sshd -D &
chmod -R 0777 /tmp
echo "Tailing the service..."
# tail -f /root/app/app.log
echo "Current directory: $PWD"
ls


#start adb server and reverse tcp on port 8081 for react-native
adb start-server
adb devices
adb reverse tcp:8081 tcp:8081


echo "Entering bash shell..."
# bash

react-native start

# npm ls --depth=0;

# npm start



