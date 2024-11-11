function tempConversion() {

    // ---- VARIABLES --- //

    let temp1 = Number(document.getElementById("degree-input1").value);
    let temp2 = Number(document.getElementById("degree-input2").value);
    let unit = document.getElementById("unitid2").value; 
    let thermometer = document.getElementById("thermometer");
    let resultText = "";
    let convertedTemp; 

    // --- TEMPERATURE CONVERSION ---  //
    for (let temp = temp1; temp <= temp2; temp++) {
        if (unit === "toFahrenheit") {
            convertedTemp = (temp * 9 / 5) + 32;
            resultText += `${convertedTemp.toFixed(2)}°F\n`;
        } else if (unit === "toCelsius") {
            convertedTemp = (temp - 32) * 5 / 9;
            resultText += `${convertedTemp.toFixed(2)}°C\n`;
        }
    }

    // results

    document.getElementById("result").textContent = resultText;

    // --- THERMOMETER --- //
    if ((unit === "toCelsius" && convertedTemp <= 0) || (unit === "toFahrenheit" && convertedTemp <= 40)) {
        thermometer.style.backgroundColor = "blue";
    } else if ((unit === "toCelsius" && convertedTemp <= 10) || (unit === "toFahrenheit" && convertedTemp <= 70)) {
        thermometer.style.backgroundColor = "yellow";
    } else if ((unit === "toCelsius" && convertedTemp >= 20) || (unit === "toFahrenheit" && convertedTemp >= 71)) {
        thermometer.style.backgroundColor = "red";
    }
}