# A Visual Memory Game - Milestone 2 Project by Mikael Lindberg

![Digital version of Simon Game](/assets/img/simon_says.JPG "Simon Board Game by Mikael Lindberg")

## Table of Contents
1. [Introduction](#Introduction)
2. [Ux](#ux)
- [User Stories](#user&nbsp;stories)
3. [Features](#features)
- [Upcoming Features](#upcoming&nbsp;features)
4. [Technologies Used](#Technologies&nbsp;Used)
5. [Testing](#testing)
- [Expected Outcome](#expected&nbsp;outcome)
- [Bugs](#bugs)
- [Manual Testing](#manual&nbsp;testing)
- [Conclusion](#conclusion)
6. [Deployment](#deployment)
7. [Credits](#credits)
8. [WireFrames](#wireframes)
9. [Media](#media)
10. [Acknowledgements](#Acknowledgements)


# Introduction
The inspiration for this project comes from a electronic console of a childrens toy called Simon. 
![Simon Game Board Game](/assets/img/simon_board.jpg "Original Simon Board Game")

I loved playing it and spent hours trying to outperform my last attempt.
Sadly it broke after a few years and was never replaced. Through the years I have on many occasions had fond flashbacks from my times playing the game. 
When the MS2 project was presented I instantly decided to recreate my childhood game as a modern web version.

# UX
As the developer I aim for a fun and relaxing game that offers a break from the stress of everyday life. The concept is easy; 
Follow along a random generated sequence that increments itself when you get the current sequence right. If not, the game is over. 
The interface should be easy for the user to understand no matter the age. The complexity comes with the incrementation of sequence.

## User&nbsp;Stories
- The game should offer different levels of difficulty depending on age/preference of the player 
- It should be able to compete with friends in pairs.
- A highscore function that saves the scores of top 5-10 players

(Interviewed my daughter, 10 years old)

# Features
A simple webpage, with three distinct sections, a header for the "logo", the main playing section and a footer at the bottom.
Decided to put a navigation feature on the "game area" instead of the header that has the game logo.. The navigation links to "Rules" and a Highscore part (for later incorporating...)

- Colored boxes as playing "buttons"
    the buttons use javascript to change the layout of the webpage.
    "start button" to begin playing. No other buttons neccessary..
- Navigation to rules and Highscore sections.
- A score function of current player's accomplished level.
- A clear display of colors (background and start button) when the Player hits wrong sequence.

## Upcoming&nbsp;Features

- Different levels of difficulty depending on age/preference of the player. Have decided that the difficulty comes from the incrementation of rounds. Perhaps a function that highlights the buttons longer will make it easier for younger players.
- Function to compete with friends in pairs. Not applicable when playing on smaller devices. 
- Highscore function that saves the scores of top 5-10 players. Will implement an input field that saves the top 10 user names.

# Technologies&nbsp;Used

CSS styling was used by utilizing Bootstrap framework. The code snippets have been implemented from [Bootstrap](getbootstrap.com).
Javascript and JQuery was used for writing the logic behind the interactivity

# Testing
I have run it through:
JS Hint
HTML Validator
![HTML Validator result](/assets/img/HTML_validator.JPG "HTML validator results")
CSS Validator
![CSS Validator result](/assets/img/CSS_validator.JPG "CSS validator results")

All buttons and links have been tested to make sure they are working. 

## Expected&nbsp;Outcome
Expected outcome when pressing corresponding random generated button is that the sequence evolves and adds one more button to the sequence. To get to the next “level” the player must replicate the correct sequence of buttons. Failure to do so results in game over. 

## Bugs

### Initial report before submitting
I have not got it working as planned... I have spent better part of the last 3 days trying to solve the lighting up part of the mechansism. I made it to difficult I think.
After checking on solutions on StackOverflow as well as youtube I should have set it up in a different approach. 

I should have contacted Tutors earlier on which would have made my code easier and more readable and thus easier to decipher. 
My main issue in the memory.js file is probably the use of Switch statement, when I probably should have gone with a FOR -loop..

Through all the testing and trying to fix the mechanism I got it working for round 1 of the game. It does not continue correctly on to round 2 and beyond.
parallell to assessment..

### Updated sept/oct 2021, manual testing and trouble shooting
After reading up on the code again. I notice several mistakes I missed earlier.
- The footer is not responsive on smaller sizes.
- The Counter is not properly set up. Starts at 0 when beginning to play.
- The game mechanics are broken past round 1. The lightning sequence not working. not producing expected outcome.
- Several functions in JS seem wrong, not quite right
- Is the random generator even working properly?? Did not test that earlier...
- Not satiesfied with the errorMsg() and "brake out sequence".

Instead of messing up the code once again I duplicated the code to a new file called gamemechanics.js. I also decided that this is a more apt name for the JS file so have continued with this name insted, updating all references to the script file.

### Manual&nbsp;Testing
1. The footer was set as fixed to bottom. Removed that. Now responsiveness is better.
2. Changed the round counter to start on 1 insted of 0.
3. I believe that my code for playerSequence() is wrong. I decide to remove it from the gameplay(). (it still exists as a separate functions in the file, for now…)
4. Started to test the gameplay function to see if the random generator is working at the beginning
    - I notice that the counter is incrementing incorrectly. It is due to a duplicate call for the function in checkSequence(). I remove it from there. only having it in gamePlay().
    - The random generator does work. I have restarted the game multiple times. It generates a "random" sequence of highlighted buttons.
    * However, a few rounds produce no highlighted button only a pressed one. Not sure why. Game mechanics intact though.
    - I try several tries of the game and brake out by pressing the wrong button, of sequence. Working as expected!

5. back to playerSequence(). I notice that the checkSequence() at the end is strange and I have trouble following the logic... I comment it out and try out the function without it. It is the conditions that falter..  I try to rewrite it and on the third try, using an nested IF statement for the length part of the sequences. I notice a change.
    - Now it works and I can try the game once more, passed round 2. 
    - I try to level 12 as well as braking out earlier on different levels. The mechanics of the game sequence works.
    - Still, some rounds do not produce light, only a pressed button. 

6. The errorMsg() need to be tweeked. I add some background color to game area and change the color of button text. And I increase the timer before restarting.

## Concusion
I am pleased with the testing and overall mechanics of the game. I will continue to implement the "Upcoming Features" in seperate releases. 
- Have found a difficulty variable to implement. A toggle button that enables the whole sequence of previous rounds to light up when leveling up. Should make it a bit easier to play.
- the High score function with input capability and storing of top-10 players.

# Deployment
It is published using Github pages: https://d99mli.github.io/ms2-memorygame/

# Credits
I have used Stackoverflow extensively during the Javascript/JQuery parts of the course. 

## Wireframes
Wireframes produced using Adobe Xd and stored on GitHub
![Wire Frames](/Simon_says_wires.pdf "Wire frames")

## Media
- Picture of original Simon Board Game courtesy of youtube.com
https://i.ytimg.com/vi/1Yqj76Q4jJ4/maxresdefault.jpg

all other pictures are from the developer of this web game.

## Acknowledgements
Big thanks to Code Institute Tutors for the patience in helping me the last days with bug fixing!
