---
layout: post
title: "More SUPERBall work."
description: ""
category: 
tags: []
---
{% include JB/setup %}
ROS and CAN, that might be a better title for this post.

Originally, I had driven out to Ames to determine why the CAN bus and the motor board were crashing with the new motor position controller.  We initially thought that numerical instabilities were causing math errors which were causing the motor board to have an error trap be thrown, so I attacked the position controller code first.

After much ado, it turned out that numerical stability was not a problem and that the CAN Festival PDO math was to blame for crashing the PIC.  With a few operations removed and reordered, we were able to move forward without worry of the motor board crashing.  As Vytas was coming by with some students from Berkeley, we wanted to make sure that we could support his demonstration with a little motion from the robot.  Yes, it was finally time to get ROS up and running, properly.

I have heard horror stories about ROS usage from past-lovers, colleagues, and extended family members, so I thought that my trepidation in approaching this was warrented, but, it turns out that it wasn't.  At least, not yet.  So far, our implementation of ROS on the system is pretty awesome.  Jonathan gave me a VM he was using that has both NTRT and ros installed on it, and we used it for a while, but ended up moving to my own install of ros on my non-virtualized ubuntu instance.

We were initially having issues with getting ROS to work properly as

Talk about DNS stuff here vs. IP.

Show some rqt plots.

videos, and photos.

SAFETY IS OUR CULTURE.

WHAT'S IN THE BAG?  (What's in the box?)

colleague says, spreads blood in the right way, we can cross-compile ross.
