$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

      var markup = "<p>In <strong>" + data.timezone + "</strong>, it is currently: <ul><li> " + data.currently.summary + " and " + data.currently.temperature + " degrees" +
      "<li>It feels like " + data.currently.apparentTemperature + " degrees and the windspeed is " + data.currently.windSpeed + " mph</ul></p>" +
      "<p>The 3-day forecast is: <ul><li>Tomorrow: " + data.daily.data[1].summary + " The high will be " + data.daily.data[1].temperatureMax + " degrees and the low will be " + data.daily.data[1].temperatureMin + " degrees" +
      "<li>The next day: " + data.daily.data[2].summary + " The high will be " + data.daily.data[2].temperatureMax + " degrees and the low will be " + data.daily.data[2].temperatureMin + " degrees" +
      "<li>The day after that: " + data.daily.data[3].summary + " The high will be " + data.daily.data[3].temperatureMax + " degrees and the low will be " + data.daily.data[3].temperatureMin + " degrees</ul></p>" +
      "<p>Here's a summary of the next 7 days: " + data.daily.summary + " </p>"

    // End of your code

    $('.weather-report').html(markup);
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
