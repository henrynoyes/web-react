---
date: '2023-08-10'
title: BirdCam
tagline: A local birdhouse camera livestream over RTSP
coverImage: /images/projects/birdcam/squint_static.png
slug: birdcam
repo: https://github.com/henrynoyes/birdcam
---

# Lightweight Motion Detection

In order to comply with the weak compute power of the raspberry pi, the motion detection is triggered by a simple subtraction of consecutive frames as shown below. The mean difference in pixels triggers the motion threshold.

![motion detection](images/projects/birdcam/light_modec.png)

# RTSP Stream with MediaMTX
As of 6/6 the streaming service has been transferred from flask deployment to a local RTSP stream. This is done using [MediaMTX](https://github.com/bluenviron/mediamtx). Similar to the flask deployment, this allows for viewing using VLC and HTTP (web browser).

This decision was made as the motion detection has served its purpose in the early stages of birdcam activity. With a full family now in the house, there is less need for detection and an emphasis on consistent low-latency streaming, which MediaMTX provides.

# RTSP Stream with VLC

6/25 - Replaced MediaMTX service with libcamera + VLC implementaion. See [stream.sh](https://github.com/henrynoyes/birdcam/blob/master/stream.sh) for RTSP streaming command.