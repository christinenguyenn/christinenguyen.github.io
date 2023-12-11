function ftoc() {
    let f = document.getElementById("fInput").value; 
    let c =  (f - 32) * (5 / 9);
    document.getElementById("conversionOutput").innerHTML = c. toFixed(2) + "°C"; 


if (f <= 32) {
    document.getElementById("outputImage"). src= "cold.gif"; 
    document.getElementById("outputAudio"). src= "cold.mp3"; 

}

else {
    document.getElementById("outputImage"). src= "hot.gif"; 
    document.getElementById("outputAudio"). src= "hot.mp3"; 

}

}
function ctof() {
    let c = document.getElementById("cInput").value; 
    let f = c * (9 / 5) + 32; 
        document.getElementById("conversionOutput").innerHTML = f. toFixed(2) + "°F"; 


if (c <= 0) {
    document.getElementById("outputImage"). src= "cold.gif"; 
    document.getElementById("outputAudio"). src= "cold.mp3"; 

}

else {
    document.getElementById("outputImage").src= "hot.gif"; 
    document.getElementById("outputAudio").src= "hot.mp3"; 
}

} 