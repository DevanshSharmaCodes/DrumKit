//To add an eventListener to all the buttons:
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

//To add an eventListener to the first button(only a single button)
//document.querySelector("button").addEventListener("click",handleClick);
//we are not writing handleClick() here (eventhough its a function) that is because if we do so, then the function will get called as soon as the script tag is run. As we want our function to be called only when the button is clicked, thus we have passed the name of the function as an argument which will be called when the action happens(button is clicked).

function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        default:console.log(buttonInnerHTML);
    }
}

function handleClick(){
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

//detecting keyboard press
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
