i=200;
t=10;
a=9.8/100;
deg = 0;
const drop = ()=>{
    var ball = document.getElementById("ball").style;
    ball.transform = `rotate(${deg}deg)`;
    deg+=1;
    deg%=360;
    if(i > 2120){
        clearInterval(f);
        bounce();

    }else{
        ball.top = (i+5)/100 +"em"; 
        i+=5;
        i+=a;
        a+=9.8/100;
    }
}
var f;
var b;
function fall(){
    f = setInterval(drop,t);
    document.getElementById("smile").innerHTML = ":)";
    document.getElementById("ball").onclick = "";

}


function updown(){
    var ball = document.getElementById("ball").style;
    ball.transform = `rotate(${deg}deg)`;
    deg+=1;
    deg%=360;
    if(a<=i-200 && a>=-9.8){
        ball.top = (i-5)/100 +"em";
        i-=5;
        i-=a;
        a-=9.8/100;
        if((i-5) >=2120){
            clearInterval(b);
        }
    }else{
        clearInterval(b);
        a=9.8/100;
        f = setInterval(drop,t);
        

    }
}
function bounce(){
    a-=9.8/5;
    t-=1;
    b= setInterval(updown,t);
    
}
