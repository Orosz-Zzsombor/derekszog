function szamok(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = Math.round (Math.sqrt(Math.pow(a,2)+Math.pow(b,2)));
    document.getElementById("atfogo").value =c;
    

}
function szerkesztheto(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("atfogo").value;

    if (Math.pow(a,2)+Math.pow(b,2)==Math.pow(c,2)){
        document.getElementById("szerkesztheto").innerHTML="Szerkeszhető";
    }
    else{
        document.getElementById("szerkesztheto").innerHTML="Nem szerkeszhető";
    }
}
