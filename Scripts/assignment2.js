function tempconversion(){
    let temp = Number(document.getElementById("degree-input").value);
    let unit = document.getElementById("unitid").value;
    let result;
    let thermometer = document.getElementById("thermometer");

    if (unit === "toFahrenheit") {
        result = (temp * 9 / 5) + 32;
        document.getElementById("result").textContent = `${temp}°C is ${result}°F`;
    }else if (unit === "toCelsius"){
        result = (temp - 32) * 5 / 9;
        document.getElementById("result").textContent = `${temp}°F is ${result}°C`;
    }else {
        document.getElementById("result").textContent = `Please enter a valid input`;
    }

    if ((unit === "toFahrenheit" && result <= 30) || (unit === "toCelsius" && result <= 0)) {
        thermometer.style.backgroundColor = "blue";  
    } else if ((unit === "toFahrenheit" && result <= 50) || (unit === "toCelsius" && result <= 10)) {
        thermometer.style.backgroundColor = "yellow";  
    } else if ((unit === "toFahrenheit" && result >= 80) || (unit === "toCelsius" && result >= 20)) {
        thermometer.style.backgroundColor = "red";  
    }
}