document.addEventListener('DOMContentLoaded', function() {
    
    var sequence = [];
    var sequencePlayer = [];
    var roundNum = 0; 
    // var scoreNum = 0;  Do I need this function in this releasse??

    // This starts the game when clicking the start button which calls gamePlay
    $(document).ready(function(){
        $("button").click(function(){
            gamePlay();
        });
    });

    // gamePlay creates a random number and pushes it to sequence
    function gamePlay() {
        var randomNum = Math.floor(Math.random()*4);
        sequence.push(randomNum); 
        showSequence(sequence[sequence.length - 1]);
        // levelUp();   Testar att muta denna
        sequencePlayer=[];
    };

    // This sets the array index of each button and respective color and sets the action of "lighting up"
    function showSequence(element) {
    
        switch (element){
            case 0:
                $("#lilac").addClass("buttons:active");
                setTimeout(function(){
                    $("#lilac").removeClass("buttons:active");
                }, 400)
                break;
            case 1:
                $("#green").addClass("buttons:active");
                setTimeout(function () {
                    $("#green").removeClass("buttons:active");
                }, 400)
                break;
            case 2:
                $("#orange").addClass("buttons:active");
                setTimeout(function () {
                    $("#orange").removeClass("buttons:active");
                }, 400)
                break;
            case 3:
                $("#blue").addClass("buttons:active");
                setTimeout(function () {
                    $("#blue").removeClass("buttons:active");
                }, 400)
                break;
        }   
    };

    function levelUp() {
        roundNum++;
        $("#round").text(`Level: ${roundNum}`); 
    };

    //This converts the players clicks into numbers and pushes it to a new array.
    $(".buttons").click(function(){
        var playerClicks= $(this).attr("id");

        switch(playerClicks){
            case "lilac":
                sequencePlayer.push(0);
                showSequence(0);
                break;

            case "green":
                sequencePlayer.push(1);
                showSequence(1);
                break;
            
            case "orange":
                sequencePlayer.push(2);
                showSequence(2);
                break;
            
            case "blue":
                sequencePlayer.push(3);
                showSequence(3);
                break;
            }
        checkSequence(sequencePlayer.length-1);             
    }); 
    
    //This checks if the sequences is correct so far
    function checkSequence(indexArr) { 

        if(sequencePlayer[indexArr] === sequence[indexArr]){

            if(sequence.length === sequencePlayer.length) {
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
