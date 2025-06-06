//using degree celcius for wimmnd chill
const temperature = 29;
const windSpeed= 11;
const n = "N/A";
function calculatewindChill( temperature, windSpeed){
 const windchill=35.74+0.6215*temperature-35.75*windSpeed**0.16+0.4275*temperature*windSpeed**0.16;
 if (temperature <=10 && windSpeed > 4.8){
    return `${Math.round(windchill)}&deg;C`;
 } else {
    return n;
 }

}  

const windChill = document.getElementById("windChill");
const windChillValue = calculatewindChill(temperature, windSpeed);
windChill.innerHTML = `Wind Chill: ${windChillValue}`