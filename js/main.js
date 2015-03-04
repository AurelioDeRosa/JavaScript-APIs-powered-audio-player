var tests = {
   proximity: 'onuserproximity' in window,
   light: 'ondevicelight' in window,
   vibration: 'vibrate' in window.navigator,
   notification: 'Notification' in window
};

var config = {
   battery: {
      lowThreshold: 0.15,
      criticalThreshold: 0.05
   },
   vibration: {
      lowThreshold: [500, 200, 500],
      criticalThreshold: [1000]
   },
   notification: {
      lowThreshold: {
         tTitle: 'Battery level: low',
         message: 'Please charge your device to avoid the audio to be automatically paused.'
      },
      criticalThreshold: {
         title: 'Battery level: critical',
         message: 'The audio has been stopped to avoid the shutdown of your device.'
      }
   },
   light: {
      darkThreshold: 50,
      normalThreshold: 10000
   }
};

var audio = document.getElementById('audio');

function manageBattery(battery) {
   if(!battery.charging && audio.duration > 0 && !audio.paused) {
      if (battery.level > config.battery.lowThreshold) {
         return;
      }

      var isCritical = battery.level <= config.battery.criticalThreshold;
      if (isCritical) {
         audio.pause();
      }

      if (tests.vibration) {
         window.navigator.vibrate(
            isCritical ? config.vibration.criticalThreshold : config.vibration.lowThreshold
         );
      }

      if (tests.notification) {
         Notification.requestPermission(function(permission) {
            if (permission !== 'denied') {
               new Notification(
                  isCritical ?  config.notification.criticalThreshold.title : config.notification.lowThreshold.title,
                  {
                     body: isCritical ?
                        config.notification.criticalThreshold.message :
                        config.notification.lowThreshold.message
                  }
               );
            }
         });
      }
   }
}

if (window.navigator.getBattery) {
   window.navigator.getBattery().then(function(battery){
      battery.addEventListener('levelchange', manageBattery.bind(window, battery));
      manageBattery(battery);
   });
} else if (window.navigator.battery) {
   window.navigator.battery.addEventListener('levelchange', manageBattery.bind(window, window.navigator.battery));
   manageBattery(window.navigator.battery);
}

if (tests.proximity) {
   window.addEventListener('userproximity', function (event) {
      if (event.near) {
         audio.paused ? audio.play() : audio.pause();
      }
   });
}

if (tests.light) {
   window.addEventListener('devicelight', function(event) {
      var light = Math.round(event.value);

      if (light < config.light.darkThreshold) {
         document.body.className = 'dark-theme';
      } else if (light < config.light.normalThreshold) {
         document.body.className = 'normal-theme';
      } else {
         document.body.className = 'light-theme';
      }
   });
}