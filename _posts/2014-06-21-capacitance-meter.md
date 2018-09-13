---
layout: post
title: Capacitance Meter
category: electronics
---
<script>
	var images = {cad: ["/images/cap-meter/Assembly1.png",
					            "/images/cap-meter/Assembly2.png",
					            "/images/cap-meter/Assembly3.png"],

		            pcb: ["/images/cap-meter/pcb.png",
                 	    "/images/cap-meter/pcb-photo.png"],

                schematic: ["/images/cap-meter/schematic.png",
                    		    "/images/cap-meter/block-diagram.png"],

                photo: ["/images/cap-meter/photo.png"]};
</script>

<div class="grid">
<div class="col-1-3">
For my first end of year project at the University of Surrey I was tasked with designing and constructing a capacitance adapter for a voltmeter. I went beyond the initial specification and managed to add digital readout and get a professionally produced PCB while still remaining within the given £15/unit budget.

Circuit:
{: .heading}
The circuit works by generating a triangle wave using a Schmitt trigger-Integrator Oscillator. This signal is passed through the capacitor being measured into a differentiator which will output a square wave with an amplitude proportional to the input capacitance. Multiple resistor values are selectable to allow for a broad measurement range (2pF-2uF). This signal then rectified to achieve a DC output.
</div>

{% include slideshow.html name="schematic" %}

</div>

<div class="grid">

{% include slideshow.html name="pcb" %}

<div class="col-1-3">
PCB:
{: .heading}
For the PCBs DFROBOT was chosen because they offered cheap PCBs with DHL shipping. The time delay in getting deliveries from China post would have been too long for this project.

To keep costs down the design had to fit on a 500mm x 500mm two layer board. This meant the design had to use SMD components. Since the circuit featured a digital readout, the output sockets would not be used much. To cut costs further were replaced by 4mm through plated holes, these worked surprisingly well.

I still have plenty of PCBs left over, if you would like one just use the contact page.

The board was designed using EAGLE
</div>

</div>
<div class="grid">
<div class="col-1-3">
Case:
{: .heading}
The case for this project was designed in Autocad 123D. The case was designed in 3 parts (Main case body, lid, block to stop 4mm jacks being pushed in too far) such that it could easily be 3D printed on a RepRap Prusa Mendel. Using a 3D printer allowed for rapid prototyping of cases and allowed mistakes to be corrected without much issue.

The PCB simply slides into the main case body along with a 9V battery the lid is then screwed down using 4 small self tapping screws.

Code:
{: .heading}
This project uses a Texas Instruments MSP430G2553 to handle Autoranging, Averaging and Display. To speed up development Energia was used to provide an arduino based environment for the MSP430. The code reads the meter output using a 1V internal voltage reference, averaging 258 readings. This is then translated into 7 segment digits (hex values were obtained from a script I made). These are then shifted into a shift register and the 4 displays multiplexed.

</div>

{% include slideshow.html name="cad" %}

</div>

<div class="grid">

{% include slideshow.html name="photo" %}

<div class="col-1-3">
Final features:
{: .heading}

* 30pF-2uF Range
* 2% Accuracy
* 258 Averages
* Multimeter output & Built in digital read out
* Auto ranging
* Individual range calibration
* Compact size (5cm x 5cm x 2.5cm)
* Battery powered
* £12 Unit cost (at time of writing)

{% include github.html repo="FM" %}

{% include license.html %}

</div>
</div>
