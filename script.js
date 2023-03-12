//validate Form



function validateData() {
    var type = document.getElementById("type").value;
    var user = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    console.log(user, type, date, amount);

    if (type == "" || user == "" || date == "" || amount == "") {
        alert("Input Fields must not be empty");
        return false;
    }
    return true;
}

function addData() {
    if (validateData() == true) {
        var type = document.getElementById("type").value;
        var user = document.getElementById("name").value;
        var date = document.getElementById("date").value;
        var amount = document.getElementById("amount").value;
        var list = JSON.parse(localStorage.getItem('list')) || [];
        if (JSON.parse(localStorage.getItem('list')) == null) {
            list = []

        }
        var test = {
            type,
            user,
            date,
            amount
        };
        localStorage.setItem('test', JSON.stringify(test));
        list.push(test);
        localStorage.setItem('list', JSON.stringify(list));


        showData();
        document.getElementById("type").value = "";
        document.getElementById("name").value = "";
        document.getElementById("date").value = "";
        document.getElementById("amount").value = "";
    }
}
function showData() {
    var list;
    if (localStorage.getItem('list') == null) {
        list = [];
    }
    else {
        list = JSON.parse(localStorage.getItem('list'));
    }
    var html = "";
    list.forEach((element, index) => {

        html += "<tr>";
        html += "<td>" + element.type + "</td>";
        html += "<td>" + element.user + "</td>";
        html += "<td>" + element.date + "</td>";
        html += "<td>" + element.amount + "</td>";
        html += '<td><button onClick="updateData(' + index + ')">Edit</button></td>';
        html += '<td><button onClick="deleteData(' + index + ')">Delete</button></td>';
        html += "</tr>";
    });

    document.querySelector("#expenseTable").innerHTML = html;
    // console.log(list);
}
document.onload = showData();

function deleteData(id) {
    var list = JSON.parse(localStorage.getItem('list'));
    if (localStorage.getItem('list') == null) {
        list = [];
    }
    else {
        list = JSON.parse(localStorage.getItem('list'));
    }
    list.splice(id, 1);
    localStorage.setItem("list", JSON.stringify(list));
    showData();


    console.log(id);
}
function updateData(id) {

    var list = JSON.parse(localStorage.getItem('list'));
    if (localStorage.getItem('list') == null) {
        list = [];
    }
    else {
        list = JSON.parse(localStorage.getItem('list'));
    }
    document.getElementById("update-expense").style.display = "block";
    document.getElementById("new-expense").style.display = "none";
    document.getElementById("type").value = list[id].type;
    document.getElementById("name").value = list[id].user;
    document.getElementById("date").value = list[id].date;
    document.getElementById("amount").value = list[id].amount;


    document.querySelector("#update-expense").onclick = function () {
        // deleteData(id);
        console.log(id);
        if (validateData() == true) {
            list[id].type = document.getElementById("type").value;
            list[id].user = document.getElementById("name").value;
            list[id].date = document.getElementById("date").value;
            list[id].amount = document.getElementById("amount").value;


            localStorage.setItem("list", JSON.stringify(list));
            showData();
            document.getElementById("type").value = "";
            document.getElementById("name").value = "";
            document.getElementById("date").value = "";
            document.getElementById("amount").value = "";
            // console.log(id);

        }
        document.getElementById("update-expense").style.display = "none";
        document.getElementById("new-expense").style.display = "block";
    }

}


function navigateInvoicePage() {
    location.replace("invoice.html");
}


