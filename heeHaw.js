document.getElementById("inputButton").onclick = function(){
    let input = document.getElementById("inputNumber").value;
    document.getElementById("output").innerHTML = "";
    document.getElementById("errorMessage").innerHTML = "";

    if (!(input >= 1)) {

        document.getElementById("errorMessage").innerHTML = "Positive integer is required!";

    } else {

        heeHaw(input);

    }
}

function heeHaw(inputGiven) {

    const NUMBER_LIMIT = inputGiven;
    const HEE_DIVISIBLE_NUMBER = 3;
    const HAW_DIVISIBLE_NUMBER = 5;

    document.getElementById("output").innerHTML = "";

    for (let i = 1; i <= NUMBER_LIMIT; i++) {
        let OUTPUT = "";

        if (i % HEE_DIVISIBLE_NUMBER === 0) {
            OUTPUT = "Hee "
        }

        if (i % HAW_DIVISIBLE_NUMBER === 0 && (OUTPUT === "Hee " || i % HEE_DIVISIBLE_NUMBER !== 0)) {
            OUTPUT += "Haw!";
        }

        if (OUTPUT === "") {
            OUTPUT = i;
        } else if (OUTPUT === "Hee ") {
            OUTPUT = "Hee!"
        }

        document.getElementById("output").innerHTML += (OUTPUT + "<br>");
    }

}