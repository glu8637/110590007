function changewidth2(){
    document.getElementById("thetable").classList.add("table200");
    document.getElementById("thetable").classList.remove("table500");
}

function changewidth5(){
    document.getElementById("thetable").classList.add("table500");
    document.getElementById("thetable").classList.remove("table200");
}

function changepadding1(){
    document.getElementById("thetable").style.borderSpacing="1px";
}

function changepadding10(){
    document.getElementById("thetable").style.borderSpacing="10px";
}

function changepadding20(){
    document.getElementById("thetable").style.borderSpacing="20px";
}

function changecolorg(){
    document.getElementById("content").style.backgroundColor="green";
    document.getElementById("content2").style.backgroundColor="green";
}

function changecolorb(){
    document.getElementById("content").style.backgroundColor="blue";
    document.getElementById("content2").style.backgroundColor="blue";
}

function changecolorp(){
    document.getElementById("content").style.backgroundColor="purple";
    document.getElementById("content2").style.backgroundColor="purple";
}

function changecoloro(){
    document.getElementById("content").style.backgroundColor="orange";
    document.getElementById("content2").style.backgroundColor="orange";
}

function reset(){
    document.getElementById("thetable").classList.add("table200");
    document.getElementById("thetable").classList.remove("table500");
    document.getElementById("thetable").style.borderSpacing="1px";
    document.getElementById("content").style.backgroundColor="yellow";
    document.getElementById("content2").style.backgroundColor="yellow";
}