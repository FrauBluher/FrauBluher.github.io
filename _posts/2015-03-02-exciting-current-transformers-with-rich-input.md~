---
layout: post
title: "Exciting Current Transformers With Rich Input"
description: ""
category: 
tags: []
---
{% include JB/setup %}

I've been mulling over the accuracies of my little 24-bit digital acquisition unit and have finally convinced myself that it's working properly (a discussion worthy of its own post).  So, now I've gotten to the point where it's appropriate to characterize the sensors that I'll be using along with the DAQ to make sure that they have the bandwidth that my learning algorithms may eventually need.

Luckily, the IEEE has been getting papers on things like this for many, many years, and finding literature upon which to base my analysis was very easy.  I found 'Frequency response of Measurement Current Transformers' by A. Cataliotti Et. Al. to be particularly interesting, but was dissappointed to find that their methods of determining frequency responses of current transformers made no mention of the hardware required for the current source used in their paper.  Based off of the figures in their paper, and the methodology behind their analysis, I assumed that they were using some sort of resistive load with an alternating excitation current.  Most likely an inverter with a frequency sweep, which would give a bode plot of frequency, magnitude, and phase when plotted on a loglog scale.

As I wasn't about to build my own inverter in a Sunday afternoon, I wanted to see if I could hack something together which would still get the job done.  Square waves are easy, and the perfect square wave is not bandwidth limited, which is to say that it can be represented by an infinite sum of scaled and shifted sine waves of various frequencies, and has a known pattern to the amount of power stored in its harmonics.  Great, I'll just excite the current transformer with a square wave, center the square wave frequency close to where I think the cut-off might be, and find when the harmonics start to roll-off faster than they should.  Simple, right?  Well, it's a little more complicated than that, as creating that sharp edge on a square wave that contains all that spectral energy can actually be pretty difficult.  I'll touch upon this further a little later in this post.

To get that square wave into the system, I needed a way of amplifying a reference signal from a signal generator.  In poking around my spare parts, I found a beefy FDB86135 (https://www.fairchildsemi.com/datasheets/FD/FDB86135.pdf) MOSFET and borrowed a si8233 from someone in lab (https://www.silabs.com/Support%20Documents/TechnicalDocs/Si823x.pdf) to drive it.  While the signal generator is technically capable of driving the gate of my FET on its own, the gate charge of 116 nanoColoumbs meant that if I wanted to drive the circuit past 20kHz, that I'd really need to use a driver, hence the si8233.  For the load I took the old 4.5 Ohm resistor pack I soldered up for use with the autotransformer (picture here), and repurposed it as the excitation load.

I used some reference parts in eagle, made a quick layout, saved the gerbers to a thumbdrive and went down to the ProtoMat to cut it out.  As always, you must respect the LPKF's Warmingtime.

![Warmingtime](http://pavlo.me/CT/warmingtime.jpg "It's a proper noun.")

{% include video.html %}

Using the 16mil double-flute end mill has always given me great results.

(picture here)

All assembled!

(Picture)

Now, the square wave that's going to sink current through the mosfet and excite the load isn't going to be purely a square wave.  Since there's input, output, and reverse transfer capacitance; and resistance in the wires, load, and Rds_on of the FET, there's going to be some sort of a RC time constant of the circuit itself which smooths out the rising edge.  Additionally, there is a finite time where the MOSFET goes through a linear region as the voltage on the gate rises from zero up to the full saturation voltage.  In this case a 4.7 Ohm resistor was added to stop ringing from occuring on the gate line, which exaggerates that even further.  All of these contribute to a more round rising and falling edge of our square wave and a less rich excitation.  However, in the case of this system, the effective bandwidth limitation of the excitation circuit is negligible, as the magnetics of the current transformer will attenuate much more high-frequency energy.  Here's a view of the test setup:

(Picture of bench.)

The first test is to see what the PSD of the excited load looks like.

(Picture of load.)

Now let's look at how that signal looks through the CT.

(Picture of load through CT.)


So, I decided to determine the frequency response of my current transformers through my own methodology.  research projects involves current transformers and analysis of spectral power desnsities of current waveforms
