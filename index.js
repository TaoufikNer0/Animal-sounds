var numberOfButtons = document.querySelectorAll(".animal").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".animal")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "l":
                var audio = new Audio("sounds/lion.mp3");
                audio.play();
                break;

            case "c":
                var audio = new Audio('sounds/cat.mp3');
                audio.play();
                break;

            case "d":
                var audio = new Audio('sounds/dog.mp3');
                audio.play();
                break;
            
            case "f":
                var audio = new Audio('sounds/fox.mp3');
                audio.play();
                break;
            
            case "e":
                var audio = new Audio('sounds/elephant.mp3');
                audio.play();
                break;
            
            case "s":
                var audio = new Audio('sounds/snake.mp3');
                audio.play();
                break;
            
            case "p":
                var audio = new Audio('sounds/parrot.mp3');
                audio.play();
                break;
            
            default: 
                console.log(buttonInnerHTML);
        }
    });
}