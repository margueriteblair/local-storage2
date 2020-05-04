let hotel = {
    hotelName: "JSON Local Storage Hotel",
    availableRooms: [[101, 102, 103, 104], [201, 202, 203, 204],[301],[401, 402, 403]],

    updateAvailableRooms: function() {
        let dropdown = `<select>`
        for (let i = 0; i < this.availableRooms.length; i++){
            for (let j = 0; j < this.availableRooms[i].length; j++) {
                dropdown = dropdown + `<option value "${this.availableRooms[i][j]}">${this.availableRooms[i][j]}</option>`
            }
        }
            dropdown= dropdown + `</select>`
            document.getElementById("availableRoomsList").innerHTML = dropdown;


    }
}
document.getElementById("name").innerText = hotel.hotelName;

if (Boolean(localStorage.getItem("jsHotel"))) {
    //start running the program
    //grab list of rooms from localstorage
   //parse and store in live object
   let hotelString = localStorage.getItem("jsHotel");
    hotel = JSON.parse(hotelString);

    hotel.updateAvailableRooms();
    
} else {
    //create add the hotel object to localStorage;
    localStorage.setItem("jsHotel", JSON.stringify(hotel))
}

