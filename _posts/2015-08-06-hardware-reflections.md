---
layout: post
title: "Hardware Reflections"
description: ""
category: 
tags: []
---
{% include JB/setup %}

In every hardware project that I've ever completed, there has always been a set of actions requisite for me to get everything working as I had originally intended it to.  A sanguine set of mistakes, fixes, and hard reflections upon my design, and moreover the process through which I go through to create whatever the integration project-du-jour was.  I recently cleaned out one of my storage areas and found a whole bunch of hardware projects started or completed during my undergraduate education, so I decided to make a post with the lessons that I learned from each venture.

It's one thing to reflect on mistakes that you made in the past, and while it's possible to see the ebb and flow of code through version control, there's something visceral about having those mistakes immortalized in hardware.  It may be my hardware superiority complex speaking, but I think that there's a special kind of learning that happens when you see the fruits of your thought process right in-front of you, however sour an unpaletable it may be.  There's something visceral about it all, from the way that the plastic sheath on an aluminum polymer capacitor burns and wicks away from where a hot iron sloppily brushes by it, to the latent smell and residue of solder flux adorning the footprint of an LQFP part.  To me it engenders the same feelings of frustration and curiousity that I felt in the moment in a way that forces me to relive my lessons and successes.  Those feelings make concrete the issues that forced me to twist my mind around my own process in a way that typing 'git log --stat' never can.  It's in those hours and knuckle scars that I remember the wonder I felt at the complexities of analog hardware design, and the black magic of high-speed digital logic design.  Anyway, most of the hardware projects I'll list here were born of my curiousity and desire to learn, so I'll try to express all the lessons that I learned from each.

My PMSMx brushless motor drivers were probably my most long lived project, and it was through this project that I cut my teeth on PCB design and completed my first board run.

It all started with a SN7544 on a breadboard mess.

<iframe src="https://player.vimeo.com/video/59880208" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/59880208">BLDC SN7544 TEST - OLD</a> from <a href="https://vimeo.com/user7682618">pavlo manovi</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

But it worked well enough for me to get a PCB run made, my first board spin ever!  Somehow it worked on the first try, though at the time I didn't really understand how to work with MOSFETs with large gate capacitances, and how things like trace impedances could cause issues with the gate drive on this.  It didn't help that the MOSFET pre-driver I was using was very picky about how its analog ground plane was set up, a concept I had no real understanding of at the time.

<iframe src="https://player.vimeo.com/video/55144226?color=c9ff23" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/55144226">BLDC Test 2</a> from <a href="https://vimeo.com/user7682618">pavlo manovi</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

Of course, this was all just with a simple block-commutation scheme.  Actually learning how motors work and sophisticated ways of driving them, and more specifically my journey through that is worth of it's own post entirely and was one of the reasons why I care so much about creating curriculum around it to make a lot of the confused literature out there clear to follow with a reference hardware implementation.  There were a few more failed attempts at making the board smaller while still maintaining operability with one of my colleague's CAN capable micro-controller boards before I ended up moving to a more integrated solution.

It was at this point that I was approached to create a motor driver for a robotics application that had some very specific design requirements.  This was my first consulting gig, and my first attempt at approaching board manufacturing and the logistical problems associated with it, e.g. part procurement, cost scaling, export law, etc. I even ended up making a little spreadsheet to help understand how all of these costs changed over time.  This sheet didn't keep up with the changes in the design for more than a couple weeks, but it did help me to foster an intuition as to what the wrong thing to do was in terms of choosing parts.

<div><iframe frameborder="0" onload="scro11me(this)" scrolling="" src="https://docs.google.com/spreadsheets/d/17yUNxj82sMBpC6ThqRAEx9UTtzrSNt01mJoKFmvMBx4/edit?usp=sharing" style="width: 100%; height: 700px;">&amp;lt; &amp;amp;widget=true/iframe&amp;gt;&amp;lt;!--{cke_protected}%3Cscript%20type%3D%22text%2Fjavascript%22%3Efunction%20scro11me(f)%7Bf.contentWindow.scrollTo(0%2C0)%3B%20%7D%3C%2Fscript%3E--&amp;gt;&amp;lt;/div&amp;gt; </iframe></div>

Soon we were working on really nice Maxon synchronous machine motors and I found myself quite deep down in a rabbit hole.  Suddenly math, suddenly controls, suddenly science.  Jeez, there were so many ways of doing things wrong, and I probably found most of them.  I went through five board runs where things waffled between working, and not working, where problems went away only for others to show up.  It was a frustrating time, but I learned to fully internalize reference designs, that you can actually contact the engineers who designed the reference layouts and the chips themselves (yes, they're real people), and that the reference designs and documentation can often be wron  I went through five board runs where things waffled between working, and not working, where problems went away only for others to show up.  It was a frustrating time, but I learned to fully internalize reference designs, that you can actually contact the engineers who designed the reference layouts and the chips themselves (yes, they're real people), and that the reference designs and documentation can sometimes be wrong.  Eventually the design converged towards a single overall design which I foolishly decided to get with a white solder-mask.

<img src="http://pavlo.me/HardwarePostPics/White-Board.jpg" alt="Not so brown, not fully populated." style="margin-left: auto; margin-right: auto; max-width: 80%; display: block;"/>

After reflowing them in our china-special oven with what we thought to be the right reflow profile, we found that the boards ended up always turning from white into a charming color somewhere between latte and burnt-marshmallow.  These boards ended up supporting most of the controls work and systems integration throughout my 2014 summer internship at NASA Ames.  The sheer amount of abuse that these boards put up with and survived was absolutely ridiculous, I was so proud of them that when they finally ended up giving up after a few months of figuring out how to correctly dump hundreds of watts through them that I almost teared up.  Experimenting with field-oriented-control on these boards was harsh, though System-ID with them was especially brutal, here's a photo of the board at it's brownest, a mixture of coffee-spills, over-heating, reflow discoloration, and flux residue.  The AstroClamp was used to hold the motors during the ID process, and was supplemented by the AstroSHHHHH, a sophisticated cardboard box full of foam that we put over the thing to try and quiet it down with while I gathered data from the motors for hours.

-- Picture of brown board, maybe show a video of it working.

Eventually I got twenty of them produced.  It took way longer than the board-house said it would, and each one required that I modify the boards.  The board house was mostly at fault, though given the experience that I have now, given that we didn't have a test suite for them to run, board failures and incorrectly assembled boards is to be expected.  It was at this point that things felt pretty good, and the design reached steady-state.  While the code continued to evolve, the hardware was finally good enough.

<img src="http://pavlo.me/HardwarePostPics/LotsOfRedBoards.jpg" alt="This was super surreal." style="margin-left: auto; margin-right: auto; max-width: 80%; display: block;"/>

About half-way through the process of designing the PMSM board, I got involved in an interesting data-science project that I thought my hardware-comfort could improve.  Enter SEADS.  Smart energy analysis and disaggregation. The goals of this project required a low-cost flexible data gathering interface for current and voltage measurements sampled continuously, with some ability for pre-processing and transmission over various physical layers.  While the data itself is fairly straightforward to sample and process, the goal of disaggregation of loads by spectral energy signatures required rich input across the entirety of the nyquist bandwidth of the acquisition system.  As such, I experimented extensively with various multi-stage filtering topologies with the intention of separating out bandwidths and using separate automatic gain controlled amplifiers to try and maximize the signal to noise ratio of the current and voltage measurements, as there's precedent to the idea that with higher frequency spectral energy, the normalized amplitude in relation to the other harmonic frequencies drops off considerably, though harmonics specific to those devices do exist.

<img src="http://pavlo.me/HardwarePostPics/FirstFiltering2.jpg" alt="Playing with fire, the gods of wall-power." style="margin-left: auto; margin-right: auto; max-width: 80%; display: block;"/>


The first system consisted of a big TI ADC with bipolar voltage input of -15 to +15v with some very nice low noise LDOs.  This system worked out well, though didn't provide the return on component cost and system complexity that I was expecting, so I moved to a more traditional current and voltage sampling method focusing on low-cost invloving an FT2232H to handle the USB stack and a little bit of buffering, a pic32 and a 24-bit sigma-delta adc for sampling signals from an iron-core current transfortmer, or rogowski coil.  This system yielded itself well to experimentation and ended up creating a system capable of checksumming and transferring data at a rate of ~2MB/s from four current/voltage channels.

<img src="http://pavlo.me/HardwarePostPics/SplitRailADCDAQ.jpg" alt="Not shown: Scary 5A boost buck -15/+15 split rail power supply." style="margin-left: auto; margin-right: auto; max-width: 80%; display: block;"/>

I also made a slightly different design that combined everyone's favorite IOT thing, the ESP8266, to transmit data to the SEAD team (our team's) restful API that handled storing usage data, and visualizing it by device, among a multitude of other wonderful useful things.

-- Picture of the SEAD.IO GUI

Originally I thought that the iron core transformers would end up being a limiting factor for the system as supposedly the bandwidth of the transformers is very low, though testing them while dog-fooding the system showed that they were fine, a process that I talked about in a previous post (link to it here).

Along the way I also made a whole bunch of other hardware boards.  This is where I'll diverge from any real narrative to a systewm where I'll just list in the order that I either find pictures, or pull them from a box.   

I'll finish this post soon.

SALT Gantry:

Misc:
