//variables
let name = "Margie";
//arrays
let names = ["Margie", "Chelsea", "Bobby", "Will", "Jamie"];
//objects

let customer = {
    firstName: "Margie",
    middleName: "",
    lastName: "Blair",
    customerId: "13136",
    dateHired: "2017-06-19",
    salary: 80000,
    shoppingDates: ["2020-01-07", "2020-01-09", "2020-01-10", "2020-01-15"],

    highWageEarners: function() {
        if (customer.salary >= 70000) {
            console.log(`Customer ${customer.firstName} ${customer.lastName} is a high wage earner, and went shopping ${customer.shoppingDates.length} times.`)
        }
    }
}

customer.highWageEarners();
document.getElementById("name").innerText = customer.firstName;
document.getElementById("storeVisits").innerText = `She went shopping ${customer.shoppingDates.length} times last month.`;