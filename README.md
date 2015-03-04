# JavaScript APIs-powered Audio Player

This repository contains the demo I've developed as a part of an article written for
[SitePoint](http://www.sitepoint.com/). The project shows how to create a simple JavaScript APIs-powered audio player that employs a few JavaScript APIs to improve the experience for people using a mobile device. In particular, the demo uses:

- The [Ambient Light API](http://modernweb.com/2014/05/27/introduction-to-the-ambient-light-api/) to change the theme of the web page based on the environment light level
- The [Proximity API](http://www.sitepoint.com/introducing-proximity-api/) to play/pause the audio based on the proximity of an object
- The [Battery Status API](http://code.tutsplus.com/tutorials/html5-battery-status-api--mobile-22795) to detect the battery level and automatically pause the audio when the battery is running critical
- The [Web Notifications API](http://www.sitepoint.com/introduction-web-notifications-api/) to notify the user when the battery is running low and that the audio was paused because the battery level was critical
- The [Vibration API](http://code.tutsplus.com/tutorials/html5-vibration-api--mobile-22585) to provide a tactile feedback that reinforces the notification messages described above

## Demo

A live demo is available [here](http://htmlpreview.github.io/?https://github.com/AurelioDeRosa/JavaScript-APIs-powered-audio-player/blob/master/index.html).

## License

This demo is licensed under the
[CC BY-NC 4.0](http://creativecommons.org/licenses/by-nc/4.0/) ("Creative Commons Attribution NonCommercial 4.0").

## Author

[Aurelio De Rosa](http://www.audero.it) (Twitter: [@AurelioDeRosa](https://twitter.com/AurelioDeRosa))