document.getElementById("title").innerText = "I yearn to travel to the following:"
let placesArray = [];

function updateLocations() {
    if (Boolean(localStorage.getItem("placesList"))) {
        let placesArray = JSON.parse(localStorage.getItem("placesList"))
        let locationName = document.getElementById("placesTravel").value;
    if (locationName.length !== 0) {
        placesArray.push(locationName);
        localStorage.setItem("placesList", JSON.stringify(placesArray))
        placesArray = JSON.parse(localStorage.getItem("placesList"))

        let htmlTag = `<ul>`
        for (let i=0;i< placesArray.length; i++) {
            htmlTag = htmlTag + `<li>${placesArray[i]}</li>`
        }
            htmlTag = htmlTag + "</ul>"
            document.getElementById("displayPlaces").innerHTML = htmlTag;
    }

    } else {
        let locationName = document.getElementById("placesTravel").value;
        placesArray.push(locationName);

        localStorage.setItem("placesList", JSON.stringify(placesArray))
        displayPlaces();
    }
}

function displayPlaces() {
let livePlacesArray = JSON.parse(localStorage.getItem("placesList"))
    let htmlTag = `<ul>`
    for (let i=0;i< livePlacesArray.length; i++) {
        htmlTag = htmlTag + `<li>${livePlacesArray[i]}</li>`
    }
        htmlTag = htmlTag + "</ul>"
        document.getElementById("displayPlaces").innerHTML = htmlTag;
}
displayPlaces()