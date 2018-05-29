#!/bin/bash

echo "Bootstrap is running..."
echo "Current directory: $PWD"
ls

# rm /root/package.json
# rm /root/app/docker/package.json
cd /root/app
npm ls --depth=0

echo "Current directory: $PWD"
ls

which npm
which node
which bash

chmod -R 0777 /tmp
echo "Tailing the service..."
# tail -f /root/app/app.log
echo "Current directory: $PWD"
ls

#start adb server and reverse tcp on port 8081 for react-native
adb start-server
adb devices
adb reverse tcp:8081 tcp:8081

# echo "Entering bash shell..."
# bash

echo "Starting React Native..."
react-native start
