// document.addEventListener('DOMContentLoaded', function() {

//     let ctrlButtons = document.getElementsByClassName('control-buttons');

//     for (let button of ctrlButtons) {
//         button.addEventListener('click', function() {
//             if (this.getAttribute('data-type') === 'resetGame') {
//                 return alert('Please press the Start button to begin playing');                                         // Function resetGame()
//             } else {
//                 let gameType = this.getAttribute('data-type');
//                 runGame(gameType);
//             }
//         })
//     }

//     runGame('normal');
// })

// function runGame(gameType) {

//     // starts a random sequence on buttons 1-4 and

//     if (gameType === 'normal') {
//         displayAdditionQuestion(num1, num2);  //MÅSTE OMDEFINERAS 
//         } else {
//         alert(`Unknown game type ${gameType}`);
//         throw `Unknown game type ${gameType}, aborting!`;
//     }
// };

document.addEventListener('DOMContentLoaded', function() {
    
    var sequence = [];
    var sequencePlayer = [];
    var roundNum = 0; 
    var scoreNum = 0; // Do I need this function in this releasse??

    // This starts the game by pushing the start button and launching gamePlay
    $(document).on("keydown", function(e){      //Behöver ändras till att starta vid onclick/keydown på "start"knappen
        if (e.keyCode === 13){
            gamePlay();
        }
    });
    // gamePlay creates a random number and pushes it to sequence
    function gamePlay() {
        var randomNum = Math.floor(Math.random()*4);
        sequence.push(randomNum); 
        showSequence(sequence[sequence.length - 1]);
        levelUp();
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
    $(".buttons").click(function(event){
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
                sequenceUser.push(3);
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
                    nextSequence();
                }, 1000);
            }
        } else {
            errorMsg();
        }
    }

    // Calls error message
    function errorMsg(){
        $("body").css("background-color", "red")
        $("h1").text("Game Over");
        setTimeout(function () {
            $("h1").text("Press Enter Key to start");
            $("body").css("background-color", "#011F3F");
        }, 1500);
    roundNum = 0;
    sequence = [];
    }

});
