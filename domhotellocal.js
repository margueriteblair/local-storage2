const siteName = "Welcome to the Local Storage Hotel!";
const websiteDescription = "You'll Never Leave!"

document.getElementById("title").innerText = siteName;
document.getElementById("slogan").innerText = websiteDescription;

localStorage.setItem("siteName", siteName)
localStorage.setItem("description", websiteDescription);


let roomsAvailable = [101, 102, 103, 104, 105];
let dropDownRooms = "<select id ='selectedAvailable'>"
for (let i = 0; i < roomsAvailable.length; i++) {
    dropDownRooms = dropDownRooms + `<option value = "${roomsAvailable[i]}">${roomsAvailable[i]}</option>`
}
dropDownRooms = dropDownRooms + "</select>"
document.getElementById("checkedInRooms").innerHTML = dropDownRooms;

let roomValue = document.getElementById("selectedAvailable").value
let roomValue_serialized = JSON.stringify(roomValue);
localStorage.setItem("RoomValue", roomValue_serialized);

function updateAvailableRooms() {
    let roomValue = document.getElementById("selectedAvailable").value
    let roomValue_serialized = JSON.stringify(roomValue);
    localStorage.setItem("RoomValue", roomValue_serialized); 
    for (let i = 0; i < roomsAvailable.length; i++) {
    roomsAvailable.splice(roomsAvailable.indexOf(roomsAvailable[i]),1);
    document.getElementById("showRooms").innerText = localStorage.getItem("RoomValue")
    }
}




//use getItem to retrieve an item once a corresponding key has been declared