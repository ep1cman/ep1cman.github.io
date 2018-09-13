---
layout: post
title: Plex Remote
category: electronics
---
<script>
	var images = {photo: ["/images/plex-ir/photo.jpg"]};
</script>

<div class="grid">
<div class="col-1-3">
**Featured on [Hack A Day](https://hackaday.com/2015/11/22/control-your-htpc-with-scavenged-ir-parts/)**

Using only an Arduino Micro that you can pickup for ~£2 from china and an IR
receiver that you can most likely scavenge out of an old set top box, you can
make a USB IR receiver that can control Plex Home Theater (or any other keyboard
controlled application e.g. Steam).

This Arduino sketch will print out unknown button codes via serial, you can then
type those into the sketch along with the keys you want to be pressed. Don't
forget to check your IR receiver pinout matches the code. If not change the
values at the top of the sketch to match.


{% include github.html repo="Plex-IR" %}
</div>

{% include slideshow.html name="photo" %}


</div>
