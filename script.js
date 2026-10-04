function explorePlanet() {

    // Get user input

    const name =
        document.getElementById("planetName").value.trim();

    const radius =
        Number(document.getElementById("radius").value);

    const mass =
        Number(document.getElementById("mass").value);

    const period =
        Number(document.getElementById("period").value);


    // Get page elements

    const error =
        document.getElementById("error");

    const planet =
        document.getElementById("planet");


    // Clear previous error

    error.textContent = "";


    // Validate input

    if (!name) {

        error.textContent =
            "Please enter a planet name.";

        return;
    }


    if (
        radius <= 0 ||
        mass <= 0 ||
        period <= 0
    ) {

        error.textContent =
            "Please enter positive values for all measurements.";

        return;
    }


    // Display planet name

    document.getElementById("resultName")
        .textContent = name;


    // Display numerical results

    document.getElementById("radiusResult")
        .textContent = radius.toFixed(2);


    document.getElementById("massResult")
        .textContent = mass.toFixed(2);


    document.getElementById("periodResult")
        .textContent = period.toFixed(1);


    // Convert radius into a visual size

    const visualSize =
        Math.min(
            180,
            Math.max(
                45,
                radius * 55
            )
        );


    planet.style.width =
        visualSize + "px";


    planet.style.height =
        visualSize + "px";


    // Interpret planet size

    let sizeMessage;


    if (radius < 1) {

        sizeMessage =
            "This planet is smaller than Earth.";

    }

    else if (radius > 1) {

        sizeMessage =
            "This planet is larger than Earth.";

    }

    else {

        sizeMessage =
            "This planet is approximately Earth-sized.";

    }


    // Interpret planet mass

    let massMessage;


    if (mass < 1) {

        massMessage =
            "Its mass is lower than Earth's.";

    }

    else if (mass > 1) {

        massMessage =
            "Its mass is greater than Earth's.";

    }

    else {

        massMessage =
            "Its mass is approximately equal to Earth's.";

    }


    // Display interpretation

    document.getElementById("description")
        .textContent =
        sizeMessage + " " + massMessage;

}