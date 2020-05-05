document.getElementById("title").innerText = "CareerDevs Cohort 11 Roster"
arrayOfNames = [];
parsedArrayNames = [];


function addNewName() {
    let newName = document.getElementById("names").value;

    if (newName.length !== 0) {
        arrayOfNames.push(newName);
        localStorage.setItem("lsStudentNames", JSON.stringify(arrayOfNames))
        parsedArrayNames = JSON.parse(localStorage.getItem("lsStudentNames"))


    } else {
        alert (`Incorrect input`)
    }

    let listTag = `<ul style='list-style-type:none'>`
    for (let i = 0; i < parsedArrayNames.length; i++) {
        listTag = listTag + `<li>${parsedArrayNames[i]}</li>`
    }
        listTag = listTag + `</ul>`
        document.getElementById("printedNames").innerHTML = listTag;
}

localStorage.getItem("lsStudentNames")
document.getElementById("printedNames").innerText = localStorage.getItem("lsStudentNames")