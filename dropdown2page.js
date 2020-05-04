function passRoom() {
    let selectValue = document.getElementById("dropdown").value;
    localStorage.setItem("Room Booked", selectValue);
    return true; 

}