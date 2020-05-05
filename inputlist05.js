let arrayNames = [];
let parsedArray = [];
function addNameToArray() {
    let nameToAdd = document.getElementById("inputBox").value

    if (nameToAdd.length !== 0) {
    arrayNames.push(nameToAdd);
    localStorage.setItem("lsArrayNames", JSON.stringify(arrayNames));
    parsedArray = JSON.parse(localStorage.getItem("lsArrayNames"))

    let htmlText = "<ul>"
    for (let i = 0; i < parsedArray.length; i++) {
        htmlText = htmlText = `<li>${arrayNames[i]}</li>`
    }
        htmlText = htmlText + "</ul>"
        document.getElementById("theList").innerHTML = htmlText;
    
    } else { 
        alert(`What teh fuck`)
    }
    
}