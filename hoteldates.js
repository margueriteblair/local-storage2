document.getElementById('hotelName').innerText = "Coder's Paradise";
document.getElementById('hotelSlogan').innerText = 'Code Now, Rest Later!';
​
​
function updateDates() {
    localStorage.setItem('date1', document.getElementById('checkInDate').value); 
    document.getElementById('checkIn').innerText = localStorage.getItem('date1'); 
​
    localStorage.setItem('date2', document.getElementById('checkOutDate').value);
    document.getElementById('checkOut').innerText = localStorage.getItem('date2');
} 
​
document.getElementById('checkIn').innerText = localStorage.getItem('date1');
document.getElementById('checkOut').innerText = localStorage.getItem('date2');