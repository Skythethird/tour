
/*add number seat*/
var ss = [];

function myFunction1() {
    var x = document.getElementById("a1").innerHTML;  
    var z = Number(document.getElementById("p1").innerHTML);
    var b = Number(document.getElementById('Price').value);
    var y = Number(document.getElementById('amount').innerHTML);;
    if(ss == '' || ss[0] != x && ss[1] != x && ss[2] != x && ss[3] != x){
        ss.push(x);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y+1;
        document.getElementById('Price').value = b+z;
        console.log(ss);
        
    }else if (ss[0]==x) {
        ss.splice(0,1);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y-1;
        document.getElementById('Price').value = b-z;
        console.log(ss);
    }else{
        var a = ss.push(x);
        var a = a-2;
        ss.splice(a,2);
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
    if(ss == '' || ss[0] != x && ss[1] != x && ss[2] != x && ss[3] != x){
        ss.push(x);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y+1;
        document.getElementById('Price').value = b+z;
        console.log(ss);
      
    }else if (ss[0]==x) {
        ss.splice(0,1);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y-1;
        document.getElementById('Price').value = b-z;
        console.log(ss);
    }else{
        var a = ss.push(x);
        var a = a-2;
        ss.splice(a,2);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y-1;
        document.getElementById('Price').value = b-z;
        console.log(ss);
    }  
}
function myFunction3() {
    var x = document.getElementById("c1").innerHTML;  
    var z = Number(document.getElementById("p3").innerHTML);
    var b = Number(document.getElementById('Price').value);
    var y = Number(document.getElementById('amount').innerHTML);
    if(ss == '' || ss[0] != x && ss[1] != x && ss[2] != x && ss[3] != x){
        ss.push(x);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y+1;
        document.getElementById('Price').value = b+z;
        console.log(ss);
      
    }else if (ss[0]==x) {
        ss.splice(0,1);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y-1;
        document.getElementById('Price').value = b-z;
        console.log(ss);
    }else{
        var a = ss.push(x);
        var a = a-2;
        ss.splice(a,2);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y-1;
        document.getElementById('Price').value = b-z;
        console.log(ss);
    }  
}
function myFunction4() {
    var x = document.getElementById("a2").innerHTML;  
    var z = Number(document.getElementById("p4").innerHTML);
    var b = Number(document.getElementById('Price').value);
    var y = Number(document.getElementById('amount').innerHTML);
    if(ss == '' || ss[0] != x && ss[1] != x && ss[2] != x && ss[3] != x){
        ss.push(x);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y+1;
        document.getElementById('Price').value = b+z;
        console.log(ss);
      
    }else if (ss[0]==x) {
        ss.splice(0,1);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y-1;
        document.getElementById('Price').value = b-z;
        console.log(ss);
    }else{
        var a = ss.push(x);
        var a = a-2;
        ss.splice(a,2);
        document.getElementById('Seat').value = ss.join(" ");
        document.getElementById('amount').innerHTML = y-1;
        document.getElementById('Price').value = b-z;
        console.log(ss);
    }  
}    
