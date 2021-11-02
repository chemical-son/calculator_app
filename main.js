//get data
function getData() {

    num1 = document.getElementById("N1").value;
    num2 = document.getElementById("N2").value;
    return [num1, num2];
}
//add
function add() {
    data = getData();
    document.getElementById("result").innerHTML = (parseInt(data[0]) + parseInt(data[1]));
}
//substraction
function add() {
    data = getData();
    document.getElementById("result").innerHTML = (parseInt(data[0]) - parseInt(data[1]));
}