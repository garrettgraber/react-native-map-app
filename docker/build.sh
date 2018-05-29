#!/bin/bash

echo "Building react-native-map-app..."
docker build -t react-native-map-app . 
# docker build --no-cache -t react-native-map-app . 

echo "Build Done!"