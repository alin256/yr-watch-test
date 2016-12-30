var yrno = require('yr.no-forecast');

Pebble.addEventListener('ready', function (e) {
  console.log('connect!' + e.ready);
  console.log(e.type);
  console.log("Requesting from YR");
  yrno.getWeather({
    'lat': '53.3478',
    'lon': '6.2597'
  }, function(err, location) {
    // Weather for next five days (Array with five object)
    location.getFiveDaySummary(cb);
    // Current conditions
    location.getCurrentSummary(cb);
    // Weather anytime from now till future
    location.getForecastForTime(time, cb);
    console.log("From YR: " + JSON.stringify(location));
  });
});
