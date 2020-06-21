/*change color seat*/
$("#a1").click(function() {
    $("#a1").toggleClass("selected");
});
$("#a2").click(function() {
    $("#a2").toggleClass("selected");
});
$("#a3").click(function() {
    $("#a3").toggleClass("selected");
});
$("#a4").click(function() {
    $("#a4").toggleClass("selected");
});
$("#a5").click(function() {
    $("#a5").toggleClass("selected");
});
$("#a6").click(function() {
    $("#a6").toggleClass("selected");
});
$("#a7").click(function() {
    $("#a7").toggleClass("selected");
});

$("#b1").click(function() {
    $("#b1").toggleClass("selected");
});
$("#b2").click(function() {
    $("#b2").toggleClass("selected");
});
$("#b3").click(function() {
    $("#b3").toggleClass("selected");
});
$("#b4").click(function() {
    $("#b4").toggleClass("selected");
});
$("#b5").click(function() {
    $("#b5").toggleClass("selected");
});
$("#b6").click(function() {
    $("#b6").toggleClass("selected");
});
$("#b7").click(function() {
    $("#b7").toggleClass("selected");
});

$("#c1").click(function() {
    $("#c1").toggleClass("selected");
});
$("#c2").click(function() {
    $("#c2").toggleClass("selected");
});
$("#c3").click(function() {
    $("#c3").toggleClass("selected");
});
$("#c4").click(function() {
    $("#c4").toggleClass("selected");
});
$("#c5").click(function() {
    $("#c5").toggleClass("selected");
});
$("#c6").click(function() {
    $("#c6").toggleClass("selected");
});
$("#c7").click(function() {
    $("#c7").toggleClass("selected");
});

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