//P5.js documentation: https://p5js.org/
//P5.js tutorials and examples by Daniel Shiffman: https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2
//And if you haven't heard of Daniel Shiffman, watch his stuff. It is either
//done in processing or p5.js of which one is a port of the other

import { scenes, currentScene } from './scenes/scenes.js';

//dimensions of the canvas in pixels
// TODO: Set these as the height and width of the window on load, and change them whenever the window is resized.
const height = 480;
const width = 640;

let canvas = {};

//P5.JS setup function
window.setup = function()
{
    canvas = createCanvas(width,height);
    scenes[currentScene.value].setup();
}

//P5.JS draw function
//This gets called every frame
//Unless there is something global, the draw functions should be changed in
//their respective files (as referenced above).
window.draw = function()
{
    scenes[currentScene.value].draw();
}

//P5.JS mouseClicked function
//This gets called on mouse click
// window.mouseClicked(event)
// {
//     console.log("mouse clicked!")
//     console.log({ event })
// 	//imageButtons.forEach((e, i, a) => e.callback(event));
// }

export { canvas };