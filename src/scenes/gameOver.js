import Scene from "../objects/scene.js";
import canvas from "../objects/canvasManager.js";
import { scaleNearestNeighbor } from "../helperFunctions/imageFunctions.js";
import ImageButton from "../objects/imageButton.js";
import sceneManager from "../objects/sceneManager.js";
import { MAIN_MENU } from "../constants/sceneConstants.js";
import canvasManager from "../objects/canvasManager.js";

export default class GameOver extends Scene {
	
    constructor() {
        super();
		this.gameOverBtn = {};
		this.gameOverBtnImg = {};    
	}

    setup() {
        this.gameOverText = createDiv('Game Over');
        this.gameOverText.addClass('game-over');
        this.gameOverText.position(canvas.width/4, canvas.height/2);
    }

    draw() {
        background('black');

		this.gameOverBtnImg = loadImage("assets/textures/ReturnButton.png",
			() => {
				this.gameOverBtnImg = scaleNearestNeighbor(this.gameOverBtnImg, 301, 103);
				this.gameOverBtn = new ImageButton(this.gameOverBtnImg, 13, 359,
					() => { 
						canvasManager.canvas.clear();
						sceneManager.setCurrentScene(MAIN_MENU);
					}
				);
			});
			canvasManager.canvas.mouseClicked((event) => {
			this.gameOverBtn.callback(event); 
		});
	}
	
    draw() {
        background(0, 255, 255);
		image(this.gameOverBtnImg, 13, 359);
    }
}
