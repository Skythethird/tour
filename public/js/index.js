
/*add number seat*/
var ss = [];

function myFunction1() {
    var x = document.getElementById("a1").innerHTML;  
    var z = Number(document.getElementById("p1").innerHTML);
    var b = Number(document.getElementById('Price').value);
    var y = Number(document.getElementById('amount').innerHTML);;
    if(ss == '' || ss[0] != x && ss[1] != x && ss[2] != x){
        ss.push(x);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y+1;
        document.getElementById('Price').value = b+z;
        console.log(ss); 
    }else {
        ss.pop(x);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y-1;
        document.getElementById('Price').value = b-z;
        console.log(ss); 
           
}
}
function myFunction2() {
    var x = document.getElementById("b1").innerHTML;  
    var z = Number(document.getElementById("p2").innerHTML);
    var b = Number(document.getElementById('Price').value);
    var y = Number(document.getElementById('amount').innerHTML);
    if(ss == '' || ss[0] != x && ss[1] != x && ss[2] != x){
        ss.push(x);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y+1;
        document.getElementById('Price').value = b+z;
        console.log(ss); 
    }else {
        ss.pop(x);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y-1;
        document.getElementById('Price').value = b-z;
        console.log(ss); 
    
    }
}    
