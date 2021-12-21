var it = [];
var c=120;
var id;
function start() {
    while (it.length < 24) {
        var n = Math.ceil(Math.random() * 8)
        var occ = 0;
        for (let i = 0; i < it.length; i++) {
            if (it[i] === n) {
                occ++
            }
        }
        if (occ < 3) {
            it.push(n);
        }
    }
    for (let i = 1; i < 25; i++) {
        var x = it[i - 1];
        document.getElementById("a" + i).style.backgroundImage = "url('./" + x + ".jpg')";
        document.getElementById("a" + i).style.backgroundSize = "cover";
    }
    setTimeout(function(){
        for(let i=1;i<25;i++){
            document.getElementById("a"+i).style.backgroundImage="";
            document.getElementById("a"+i).style.backgroundSize="cover";}
    },5000)
    document.getElementById("btn").style.display="none";
    
   setTimeout(function(){
    id=setInterval(function(){
        c--;
        document.getElementById("compteur").innerHTML=c;
        if(c===0){clearInterval(id);
            document.getElementById("result").style.display="";
        document.getElementById("result").innerHTML="<h1 align='center' style='margin-top:400px;color:rgb(255, 255, 255);background-color: red;text-shadow:0 0 15px black;font-size:54pt;'>Game Over!!</h1><br><input type='button' value='TryAgain' style='margin-left: 50%;' onclick='replay()'>";
        }

},500)

   },4800) 

}
var nbr=0;
var ele=[];
var re=0;
function imclick(y){
    if(document.getElementById("btn").style.display==="none"){
        if(nbr<3){
    if(document.getElementById("a" + y).style.backgroundImage ===""){
    nbr++;
    ele.push(y);
    document.getElementById("a" + y).style.backgroundImage = "url('./" + it[y-1] + ".jpg')";
    document.getElementById("a" + y).style.backgroundSize = "cover";
    if(nbr===3){
        if(it[ele[0]-1]!==it[ele[1]-1] || it[ele[1]-1]!==it[ele[2]-1] ){
            setTimeout(function(){
                document.getElementById("a"+ele[0]).style.backgroundImage="";
                document.getElementById("a"+ele[1]).style.backgroundImage="";
                document.getElementById("a"+ele[2]).style.backgroundImage="";
                nbr=0;
                ele.splice(0,3);
            }
            ,800)
        }
        else{
            nbr=0;
            ele.splice(0,3);
            re++;
        }

    }
    if (re==8 && c>=0){
        document.getElementById("result").style.display="";
        clearInterval(id);
    }
    if(c==0 && re!==8 ){document.getElementById("result").style.display="";
    document.getElementById("result").innerHTML="<h1 align='center' style='margin-top:400px;color:rgb(255, 255, 255);background-color: red;text-shadow:0 0 15px black;font-size:54pt;'>Game Over!!</h1><br><input type='button' value='TryAgain' style='margin-left: 50%;' onclick='replay()'>";
    }
}
}
    }
    
}
function replay(){location.reload(true);};

