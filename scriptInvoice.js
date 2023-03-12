
function showData() {
    let list;
    if (localStorage.getItem('list') == null) {
        list = [];
    }
    else {
        list = JSON.parse(localStorage.getItem('list'));
    }
    let html = "";
    let sumAmt=0;
    list.forEach((element, index) => {
        sumAmt=sumAmt+parseInt(element.amount);
        html += "<tr>";
        html += "<td>" + element.user + "</td>";
        html += "<td>" + element.type + "</td>";
        html += "<td>" + element.date + "</td>";
        html += "<td>" + element.amount + "</td>";
        html += "</tr>";
    });

    document.querySelector("#expenseTable").innerHTML = html;
   document.querySelector("#name").innerHTML=list[0].user;
   document.querySelector("#compname").innerHTML=list[0].user;
   document.querySelector("#total").innerHTML=sumAmt;
    // console.log(list);
}
document.onload = showData();


function handleNewRecords(){
    location.replace("index.html");
    localStorage.removeItem("list");
    localStorage.removeItem("test");
}