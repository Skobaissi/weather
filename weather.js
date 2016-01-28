$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

      // var markup = {apparentTemperature:"32",cloudCover: "0.92",dewPoint: "25.69",humidity: "0.79", icon: "partly-cloudy-night",nearestStormBearing: "97",nearestStormDistance: "20",ozone: "322.26",precipIntensity: "0",precipProbability: "0",pressure: "1015.62",summary: "Mostly Cloudy",temperature: "31.56",time: "1453677410",visibility: "7.74",windBearing: "124",windSpeed: "1.26"}
      var markup = "<p>It is " + data.currently.summary + " and " + data.currently.apparentTemperature + " degrees.</p>"
      var markup = "<p>It is " + data.currently.summary + " and " + data.currently.apparentTemperature + " degrees.</p>"
    // End of your code

    $('.weather-report').html(markup);
    $('.weather-report2').html(markup2);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
