var numBox =3;
var color=[];
var pickedColor;

var box = document.querySelectorAll(".box");
var discolor = document.querySelector("#colorDisplay");
var resetButton=document.querySelector("#newGame");
var dismsg = document.querySelector("#try");
var gameModes=document.querySelector(".mode");
var easyGame = document.querySelector("#easyG");
var hardGame = document.querySelector("#hardG");
var head =document.querySelector("#color-head");

intial();

function intial(){
    discolor.textContent= pickedColor;
    setupBoxes();
    reset();
}

resetButton.addEventListener("click",function(){
    reset();
})

easyGame.classList.add("selected");

function reset(){
    color=getRandomColor(numBox);
    pickedColor=correctColor();
    discolor.textContent=pickedColor;
    head.style.backgroundColor="#00ffff";
    dismsg.textContent=" ";
    for(var i=0;i<box.length;i++){
        if(color[i]){
            box[i].style.display = "block";
            box[i].style.backgroundColor=color[i];
        }
        else{
            box[i].style.display = "none";
        }
    }
}

easyGame.addEventListener("click",function(){
    hardGame.classList.remove("selected");
    easyGame.classList.add("selected");
    numBox=3;
    reset();
});

hardGame.addEventListener("click",function(){
    easyGame.classList.remove("selected");
    hardGame.classList.add("selected");
    numBox=6;
    reset();
});




function setupBoxes(){
    for(var i=0;i<box.length;i++){
        box[i].style.backgroundColor = color[i];
        box[i].addEventListener("click",function(){
            var clickColor=this.style.backgroundColor;
            //console.log(pickedColor, clickColor)
            //console.log(clickColor);
            if(clickColor === pickedColor){
                console.log("hii");
                changeColor(pickedColor);
                dismsg.textContent="Correct";
                head.style.backgroundColor=pickedColor;
            }
            else{
                this.style.backgroundColor="#171718";
                dismsg.textContent = "Try Again";
            }
        });
    }
}

function changeColor(colour){
    for(var i=0;i< box.length;i++){
        box[i].style.backgroundColor = colour;
        head.style.backgroundColor = colour;
        console.log(colour);
    }
}

function makeColor(){
    var r= Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

function getRandomColor(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(makeColor());
    }
    return arr;
}

function correctColor(){
    var random = Math.floor(Math.random()*color.length);
    return color[random];
}

