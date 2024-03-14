let chars = document.querySelectorAll(".drum");
let songs = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3","tom-3.mp3", "tom-4.mp3"];

for(let i = 0 ; i < chars.length ; i++){
    chars[i].addEventListener("click", function () {
        let innerHTML = this.innerHTML;
        songForKeyBoard(innerHTML);
        buttonAnimation(innerHTML)
    }); 

}

document.addEventListener('keydown', function(event){
    songForKeyBoard(event.key);
    buttonAnimation(event.key);
});

function songForKeyBoard(key){ 
        let song;
        switch(key) {
            case "w":
                song = new Audio("./sounds/" + songs[0]);

                break;
            case "a":
                song = new Audio("./sounds/" + songs[1]);
                break;
            case "s":
                song = new Audio("./sounds/" + songs[2]);
                break;
            case "d":
                song = new Audio("./sounds/" + songs[3]);
                break;
            case "j":
                song = new Audio("./sounds/" + songs[4]);
                break;
            case "k":
                song = new Audio("./sounds/" + songs[5]);
                break;
            case "l":
                song = new Audio("./sounds/" + songs[6]);
                break;
            default:
                console.log("Invalid key pressed");

        };
        song.play();
        
};

function buttonAnimation(key){
    let button = document.querySelector("."+key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed")
    }, 100)
}
