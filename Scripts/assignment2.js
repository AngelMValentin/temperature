function tempconversion(){
    let cTemp = Number(prompt("What is the temperature in Celsius? (Numbers Only)"));
    let fTemp = (cTemp * 9/5) + 32;
    

    console.log(fTemp);
    document.getElementById("result").textContent = `The temperature in Fahrenheit is ${fTemp}°F.`;
}