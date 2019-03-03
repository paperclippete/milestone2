
$(document).ready(function() {
    const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=Glasgow&APPID=31bfcbea061f0bd7c06d6bbf48bae278";
    const el = $("#weather-data")
    var weather;
    var weatherDescription;
    var weatherIcon;
    var temperature;
    var minTemperature;
    var maxTemperature;
        
        $.ajax({
            type: "GET",
            url: baseURL,
            dataType: "jsonp",
            success: function(data) {
                //display temperatures in Celsius
                temperature = Math.round(data.main.temp - 273.15) + '°C';
				minTemperature = Math.round(data.main.temp_min - 273.15) + '°C';
				maxTemperature = Math.round(data.main.temp_max - 273.15) + '°C';
				weatherDescription = data.weather[0].main;
                weather = {
                    weatherDescription,
                    temperature,
                    minTemperature,
                    maxTemperature
                    };
                
                $("#weather-data").html(`<p>The current weather in Glasgow is ${weatherDescription}.<br> The current temperature is ${temperature}. Today's high will be ${maxTemperature}, today's low will be ${minTemperature}.</p>`);
                }
            }
        );
});






