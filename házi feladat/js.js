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
        alert("Szerkeszhető");
    }
    else{
        alert("Nem szerkeszhető");
    }
}
function veletlen(){
    document.getElementById("a").value =Math.floor(Math.random()*100)+1;
    document.getElementById("b").value = Math.floor(Math.random()*100)+1;
    document.getElementById("atfogo").value =Math.floor(Math.random()*100)+1;
}
