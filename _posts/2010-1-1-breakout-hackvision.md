---
layout: post
title: Breakout! Hackvision Edition
category: software
---


<div class="grid">

<div class="col-1-3">
This is a recreation of the classic game breakout. I made this game for the
[hackvision](http://nootropicdesign.com/hackvision/) games console by
[Nootropic design](http://nootropicdesign.com/) but this game will work
successfully on any arduino board with the TVout libary hardware and some push
buttons. This game has been featured on the
**[Nootropic design games page](http://nootropicdesign.com/hackvision/games.html).**

**UPDATE!** - v1.1 now features Wii nunchuk controles!

{% include github.html repo="breakout-hackvision" %}


If you feel the game is running too slow just edit the line "TV.delay_frame(2)"
at the end to "TV.delay_frame(1)"

The following libraries are also required:

- [TVout Libary](http://code.google.com/p/arduino-tvout/downloads/detail?name=TVoutBeta1.zip)
- [Hackvision Controllers library](http://nootropicdesign.com/hackvision/downloads/Controllers.zip)

</div>

<div class="col-2-3">
<div class="video-container">
<object data="https://www.youtube.com/embed/rbttu301--4">
</div>
</div>

</div>
