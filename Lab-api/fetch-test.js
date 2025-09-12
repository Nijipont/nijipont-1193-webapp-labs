fetch("http://goweather.xyz/weather/Khonkaen")
  .then((response) => response.json())
  .then((data) => {
    console.log("Day: " + JSON.stringify(data.forecast[0].day) + " Temperature " + JSON.stringify(data.forecast[0].temperature));
    console.log("Day: " + JSON.stringify(data.forecast[1].day) + " Temperature " + JSON.stringify(data.forecast[1].temperature));
  });
