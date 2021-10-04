document.addEventListener('DOMContentLoaded', function() {
    
    let sequence = [];
    let playerSequence = [];
    let roundNum = 0;
 
    // This starts the game when clicking the start button which calls gamePlay
    $(document).ready(function(){
        $("#start-button").click(function(){
            gamePlay();
        });
    });

    // gamePlay creates a random number and pushes it to sequence
    function gamePlay() {

        levelUp();
        let randomNum = Math.floor(Math.random()*4); 
        sequence.push(randomNum); 
        randomSequence(sequence[sequence.length -1]);
        playerSequence = [];
    }

    // This sets the array index of each button and respective color and sets the action of "lighting up"
    function randomSequence(element) {
    
        switch (element){
            case 0:
                $("#lilac").addClass("buttonClick");
                setTimeout(function(){
                    $("#lilac").removeClass("buttonClick");
                }, 250);
                break;
            case 1:
                $("#green").addClass("buttonClick");
                setTimeout(function () {
                    $("#green").removeClass("buttonClick");
                }, 250);
                break;
            case 2:
                $("#orange").addClass("buttonClick");
                setTimeout(function () {
                    $("#orange").removeClass("buttonClick");
                }, 250);
                break;
            case 3:
                $("#blue").addClass("buttonClick");
                setTimeout(function () {
                    $("#blue").removeClass("buttonClick");
                }, 250);
                break;
        }   
    }

    function levelUp() {
        roundNum++;
        $("#round").text(`${roundNum}`); 
    }

    //This converts the players clicks into numbers and pushes it to a new array.
    $(".buttons").click(function(){
        let playerClicks= $(this).attr("id");

        switch(playerClicks){
            case "lilac":
                randomSequence(0);
                playerSequence.push(0);                
                break;

            case "green":
                randomSequence(1);
                playerSequence.push(1);                
                break;
            
            case "orange":
                randomSequence(2);
                playerSequence.push(2);                
                break;
            
            case "blue":
                randomSequence(3);
                playerSequence.push(3);                
                break;
            }
        checkSequence(playerSequence.length -1);
    }); 
    
    //This checks if the sequences is correct so far
    function checkSequence(indexArr) { 

        if(sequence[indexArr] === playerSequence[indexArr]) {

            if(sequence.length === playerSequence.length) {

                setTimeout(function () {
                    gamePlay();
                }, 1500);
            }
        } else {
            errorMsg();
            roundNum = 0;
            sequence = [];
        }
    }

    // Calls error message
    function errorMsg() {
        $("button").css("background-color", "#d3cfcf");
        $("button").text("Game Over");
        $("button").css("color", "black");
        $(".game-area").css("background-color", "#cc0000");
        setTimeout(function () {
            $("button").text("Start New Game");
            $("button").css("color", "#eee");
            $("button").css("background-color", "green");
            $(".game-area").css("background-color", "#d3cfcf");
        }, 3500);
    }
});
