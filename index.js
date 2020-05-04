
function updateNames() {
    localStorage.setItem("Name One", document.getElementById("fName").value);
    document.getElementById("firstName").innerText = localStorage.getItem("Name One");

    localStorage.setItem("Name Two", document.getElementById("lName").value);
    document.getElementById("lastName").innerText = localStorage.getItem("Name Two");
}
document.getElementById("lastName").innerText = localStorage.getItem("Name Two");
document.getElementById("firstName").innerText = localStorage.getItem("Name One");


