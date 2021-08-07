//P5.js documentation: https://p5js.org/
//P5.js tutorials and examples by Daniel Shiffman: https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2
//And if you haven't heard of Daniel Shiffman, watch his stuff. It is either
//done in processing or p5.js of which one is a port of the other

import sceneManager from './objects/sceneManager.js';
import { MAIN_MENU } from './constants/sceneConstants.js';
import canvas from './objects/canvas.js';

/**
 * Our index.js file serves as the gateway into the rest of our application,
 * and this setup method hooks into the p5 setup function, which is the gateway to all
 * things p5 in our application.
 */
window.setup = function()
{
    canvas.createCanvas();
    sceneManager.setCurrentScene(MAIN_MENU);
}

/**
 * This hooks into the p5 draw function, which gets called every frame.
 * We are using this to pipe through the draw function of whichever scene is currently set.
 */
window.draw = function()
{
    sceneManager.getCurrentScene().draw();
}