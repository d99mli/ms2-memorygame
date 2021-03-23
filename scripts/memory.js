document.addEventListener('DOMContentLoaded', function() {
    
    let sequence = [];
    let playerSequence = [];
    let roundNum = 0; 
    // var scoreNum = 0;  Do I need this function in this releasse??

    // This starts the game when clicking the start button which calls gamePlay
    $(document).ready(function(){
        $("#start-button").click(function(){
            console.log("Initializing game after click on start button"); //works
            gamePlay();
        });
    });

    // gamePlay creates a random number and pushes it to sequence
    function gamePlay() {

        let randomNum = Math.floor(Math.random()*4);
        // randomNum;
        console.log(randomNum); //works
        sequence.push(randomNum); 
        console.log(sequence); //works
        showSequence(sequence[sequence.length - 1]);
        levelUp();
        playerSequence=[];
    }

    // This sets the array index of each button and respective color and sets the action of "lighting up"
    function showSequence(element) {
    
        switch (element){
            case 0:
                $("#lilac").addClass("buttonClick");
                setTimeout(function(){
                    $("#lilac").removeClass("buttonClick");
                }, 750);    //changed from 400 to 750 and created new class in style.css called buttonClick
                break;
            case 1:
                $("#green").addClass("buttonClick");
                setTimeout(function () {
                    $("#green").removeClass("buttonClick");
                }, 750);
                break;
            case 2:
                $("#orange").addClass("buttonClick");
                setTimeout(function () {
                    $("#orange").removeClass("buttonClick");
                }, 750);
                break;
            case 3:
                $("#blue").addClass("buttonClick");
                setTimeout(function () {
                    $("#blue").removeClass("buttonClick");
                }, 750);
                break;
        }   
    }

    function levelUp() {
        roundNum++;
        $("#round").text(`Level: ${roundNum}`); 
    }

    //This converts the players clicks into numbers and pushes it to a new array.
    $(".buttons").click(function(){
        let playerClicks= $(this).attr("id");

        switch(playerClicks){
            case "lilac":
                playerSequence.push(0);
                showSequence(0);
                break;

            case "green":
                playerSequence.push(1);
                showSequence(1);
                break;
            
            case "orange":
                playerSequence.push(2);
                showSequence(2);
                break;
            
            case "blue":
                playerSequence.push(3);
                showSequence(3);
                break;
            }
        checkSequence(playerSequence.length-1);             
    }); 
    
    //This checks if the sequences is correct so far
    function checkSequence(indexArr) { 

        if(playerSequence[indexArr] === sequence[indexArr]){

            if(sequence.length === playerSequence.length) {
                setTimeout(function () {
                    gamePlay();
                }, 1000);
                levelUp();
            }
        } else {
            errorMsg();
        }
    }

    // Calls error message
    function errorMsg() {
        $("button").css("background-color", "red")
        $("h6").text("Game Over");
        setTimeout(function () {
            $("h6").text("Press Start button to try again");
            $("button").css("background-color", "green");
        }, 1500);
        roundNum = 0;
        sequence = [];
    }

});
