---
date: '2024-03-06'
title: BirdCam
tagline: A local birdhouse camera livestream over RTSP
coverImage: /images/projects/birdcam/squint_static.png
slug: birdcam
repo: https://github.com/henrynoyes/birdcam
---

# Description

The goal of this project was to create a tech-infused birdhouse that enabled a 24/7 livestream of nest activity. The main hardware consists of a Raspberry Pi 4B with the noIR camera module, accompanied by an 850nm LED and a voltage regulator. This allows the camera to transmit video in the dark without disturbing any feathered inhabitants. These parts are mounted on a 3D printed plate that sits in a small enclosure beneath the roof of the birdhouse. The birdhouse, designed and built by [my brother](https://elliotnoyes.com), has a removable roof that attaches via magnets and covers a small room with an acryllic floor for the camera and LED. 

![3D mount](images/projects/birdcam/3D_mount.jpg)

![mount in house](images/projects/birdcam/mount_inhouse.jpg)

![birdhouse](images/projects/birdcam/birdhouse.jpg)

The streaming service is configured as a cron job and the bash script can be viewed [here](https://github.com/henrynoyes/birdcam/blob/master/stream.sh). It uses libcamera and VLC to deploy a local RTSP stream. Future upgrades to the project may include a microphone to stream audio. Below are some gifs from the first season of operation. We were lucky enough to house a family of Eastern bluebirds and a family of carolina wrens. Check the [github repo](https://github.com/henrynoyes/birdcam) for more details as we prepare for the upcoming season.

# Eastern Bluebirds

![bluebirds](images/projects/birdcam/bluebirds.gif)

# Carolina Wrens

![wrens](images/projects/birdcam/wrens.gif)