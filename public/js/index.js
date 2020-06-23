
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}    
function myFunction5() {
    var x = document.getElementById("b2").innerHTML;  
    var z = Number(document.getElementById("p5").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }
}
function myFunction6() {
    var x = document.getElementById("c2").innerHTML;  
    var z = Number(document.getElementById("p6").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}    
function myFunction7() {
    var x = document.getElementById("a3").innerHTML;  
    var z = Number(document.getElementById("p7").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}    
function myFunction8() {
    var x = document.getElementById("b3").innerHTML;  
    var z = Number(document.getElementById("p8").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}    
function myFunction9() {
    var x = document.getElementById("c3").innerHTML;  
    var z = Number(document.getElementById("p9").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}    
function myFunction10() {
    var x = document.getElementById("a4").innerHTML;  
    var z = Number(document.getElementById("p10").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}    
function myFunction11() {
    var x = document.getElementById("b4").innerHTML;  
    var z = Number(document.getElementById("p11").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}    
function myFunction12() {
    var x = document.getElementById("c4").innerHTML;  
    var z = Number(document.getElementById("p12").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}    
function myFunction13() {
    var x = document.getElementById("a5").innerHTML;  
    var z = Number(document.getElementById("p13").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}    
function myFunction14() {
    var x = document.getElementById("b5").innerHTML;  
    var z = Number(document.getElementById("p14").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}    
function myFunction15() {
    var x = document.getElementById("c5").innerHTML;  
    var z = Number(document.getElementById("p15").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}
function myFunction16() {
    var x = document.getElementById("a6").innerHTML;  
    var z = Number(document.getElementById("p16").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}
function myFunction17() {
    var x = document.getElementById("b6").innerHTML;  
    var z = Number(document.getElementById("p17").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}
function myFunction18() {
    var x = document.getElementById("c6").innerHTML;  
    var z = Number(document.getElementById("p18").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}
function myFunction19() {
    var x = document.getElementById("a7").innerHTML;  
    var z = Number(document.getElementById("p19").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}
function myFunction20() {
    var x = document.getElementById("b7").innerHTML;  
    var z = Number(document.getElementById("p20").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}
function myFunction21() {
    var x = document.getElementById("c7").innerHTML;  
    var z = Number(document.getElementById("p21").innerHTML);
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
        console.log(a);
        var a = a-2;
        console.log(a);
        if(ss[a] != x){  
            console.log(a);
            var a = a-1;
            ss.splice(a,1);
            var a = a+1
            ss.splice(a,1);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }else{
            var a = ss.push(x);
            console.log(a);
            var a = a-3;
            ss.splice(a,3);
            document.getElementById('Seat').value = ss.join(" ");
            document.getElementById('amount').innerHTML = y-1;
            document.getElementById('Price').value = b-z;
            console.log(ss);
        }    
    }  
}    
