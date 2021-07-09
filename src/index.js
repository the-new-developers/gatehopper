//P5.js documentation: https://p5js.org/
//P5.js tutorials and examples by Daniel Shiffman: https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2
//And if you haven't heard of Daniel Shiffman, watch his stuff. It is either
//done in processing or p5.js of which one is a port of the other

const scenes = {
    "Challenge Mode": challengeMode,
    "Cheat Sheet": cheatSheet,
    "Game Over": gameOver,
    "Instructions": instructions,
    "Main Menu": mainMenu,
    "Practice Mode": practiceMode,
    "Settings": settings
};

let currentScene = "Main Menu";

function setup()
{
    createCanvas(640,480);
}

function draw()
{
    scenes[currentScene]();
}
