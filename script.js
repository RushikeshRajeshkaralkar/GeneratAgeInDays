function Btn_Click1() {

    var result = prompt("Enter your age ")
    result = result * 365;
    console.log("Your age in Days are " + '' + result);
    document.getElementById("result").innerHTML = "Your age in Days are " + '' + result;


}

function Btn_Click2() {
    document.getElementById("result").innerHTML = "";
}