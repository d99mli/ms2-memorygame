![Digital version of Simon Game](/assets/img/simon_says.jpg "Digital version Simon Board Game by Mikael Lindberg")

## A Visual Memory Game - Milestone 2 Project by Mikael Lindberg

The inspiration for this project comes from a electronic console of a childrens toy called Simon. 
![Simon Game Board Game](/assets/img/simon_board.jpg "Original Simon Board Game")

I loved playing it and spent hours trying to outperform my last attempt.
Sadly it broke after a few years and was never replaced. Through the years I have on many occasions had fond flashbacks from my times playing the game. 
When the MS2 project was presented I instantly decided to recreate my childhood game as a modern web version.


# UX

As the developer I aim for a fun and relaxing game that offers a break from the stress of everyday life. The concept is easy; 
Follow along a random generated sequence that increments itself when you get the current sequence right. If not, the game is over. 
The interface should be easy for the user to understand no matter the age. The complexity comes with the incrementation of sequence.

## User Stories
- The game should offer different levels of difficulty depending on age/preference of the player 
- It should be able to compete with friends in pairs.
- A highscore function that saves the scores of top 5-10 players

(Interviewed my daughter, 9 years old)

# Features
A single webpage, with three distinct sections, a header for the "logo", the main playing section and a footer at the bottom.

- Colored boxes as playing "buttons"
    the buttons use javascript to change the layout of the webpage.
- Navigation to rules and Highscore sections.
- A score function of current player's accomplished level.

## Features in upcoming releases

- Different levels of difficulty depending on age/preference of the player. Have decided that the difficulty comes from the incrementation of rounds. Perhaps a function that highlights the buttons longer will make it easier for younger players.
- Function to compete with friends in pairs. Not applicable when playing on smaller devices. 
- Highscore function that saves the scores of top 5-10 players. Will implement an input field that saves the top 10 user names.

# Technologies Used 

CSS styling was used by utilizing Bootstrap framework. The code snippets have been implemented from [Bootstrap](getbootstrap.com).
Javascript and JQuery was used for writing the logic behind the interactivity

# Testing

I have run it through:
JS Hint
HTML Validator
CSS Validator

## Bugs

I have not got it working as planned... I have spent better part of the last 3 days trying to solve the lighting up part of the mechansism. I made it to difficult I think.
After checking on solutions on StackOverflow as well as youtube I should have set it up in a different approach. 

I should have contacted Tutors earlier on which would have made my code easier and more readable and thus easier to decipher. 
My main issue in the memory.js file is probably the use of Switch statement, when I probably should have gone with a FOR -loop..

Through all the testing and trying to fix the mechanism I got it working for round 1 of the game. It does not continue correctly on to round 2 and beyond.
parallell to assessment..

# Deployment
It is published using Github pages: https://d99mli.github.io/ms2-memorygame/

# Credits

I have used Stackoverflow extensively during the Javascript/JQuery parts of the course. 

## Content

## Media

## Acknowledgements

Big thanks to Code Institute Tutors for the patience in helping me the last days with bug fixing!




