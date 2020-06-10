
/*add number seat*/
var ss = [];

function myFunction1() {
    var x = document.getElementById("a1").innerHTML;
    var y = Number(document.getElementById("am1").innerHTML);
    var z = Number(document.getElementById("p1").innerHTML);
    var a = Number(document.getElementById('amount').value);
    var b = Number(document.getElementById('Price').value);
    ss.push(x);
    document.getElementById('Seat').value = ss.join(" ");
    document.getElementById('amount').value = y+a;
    document.getElementById('Price').value = z+b;
    console.log(ss);   
}
function myFunction2() {
    var x = document.getElementById("b1").innerHTML;
    ss.push(x);
    document.getElementById('Seat').value = ss.join(" "); 
    console.log(ss);  
}
function myFunction3() {
    var x = document.getElementById("c1").innerHTML;
    ss.push(x);
    document.getElementById('Seat').value = ss.join(" "); 
    console.log(ss);
}
