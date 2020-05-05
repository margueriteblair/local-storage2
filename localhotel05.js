let hotel = {
    hotelName: "JS localStorage Hotel",
    hotelMotto: "Show Me The Data!",

    availableRooms: [["201", "202", "203", "204"],["301", "302", "303"]],
}

let hotelMethods = {
    updateAvailableRooms: function() {
        let dropdown = `<select>`
        for (let i = 0; i < liveHotel.availableRooms.length;i++) {
            for (let j = 0; j < liveHotel.availableRooms[i].length;j++) {
                dropdown = dropdown + `<option value = "${liveHotel.availableRooms[i][j]}">${liveHotel.availableRooms[i][j]}</option>`
            }
        }
                dropdown = dropdown + `</select>`
                document.getElementById("availableRoomsList").innerHTML = dropdown;
    }

}
hotelMethods.updateAvailableRooms();
localStorage.setItem("lsHotel", JSON.stringify(hotel))
let liveHotel = JSON.parse(localStorage.getItem("lsHotel"))
document.getElementById("name").innerText = liveHotel.hotelName;