//P5.js documentation: https://p5js.org/
//P5.js tutorials and examples by Daniel Shiffman: https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2
//And if you haven't heard of Daniel Shiffman, watch his stuff. It is either
//done in processing or p5.js of which one is a port of the other

//Add scenes from scene files here
const scenes = {
    "Challenge Mode": challengeMode, ///src/scenes/challengeMode.js
    "Cheat Sheet": cheatSheet, ///src/scenes/cheatSheet.js
    "Game Over": gameOver, ///src/scenes/gameOver.js
    "Instructions": instructions, ///src/scenes/instructions.js
    "Main Menu": mainMenu, ///src/scenes/mainMenu.js
    "Practice Mode": practiceMode, ///src/scenes/practiceMode.js
    "Settings": settings ///src/scenes/settings.js
};

//Change this to change the scene between the options above
let currentScene = "Main Menu";

//P5.JS setup function
function setup()
{
    createCanvas(640,480);
}

//P5.JS draw function
//This gets called every frame
//Unless there is something global, the draw functions should be changed in
//their respective files (as referenced above).
function draw()
{
    scenes[currentScene]();
}
