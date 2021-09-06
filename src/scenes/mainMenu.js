import Scene from "../objects/scene.js";
import { scaleNearestNeighbor } from "../helperFunctions/imageFunctions.js";
import ImageButton from "../objects/imageButton.js";
import sceneManager from "../objects/sceneManager.js";
import canvasManager from "../objects/canvasManager.js";
import { CHALLENGE_MODE, PRACTICE_MODE, INSTRUCTIONS, CHEAT_SHEET, SETTINGS } from "../constants/sceneConstants.js";

export default class MainMenu extends Scene {
    constructor() {
        super(); 
        this.imageButtons = [];
        this.frame = 0;
    }

	/**
	 * Our own private method for changing scenes.
	 * @param {string} sceneName The name of the scene we want to change to.
	 */
	#changeScene(sceneName) {
		this.imageButtons = [];
		sceneManager.setCurrentScene(sceneName);
	}

    setup() {
        const btnImageSpritesheet = "assets/textures/mainMenu/buttons.png";
        const btnScenes = [
            CHALLENGE_MODE,
            PRACTICE_MODE,
            INSTRUCTIONS,
            CHEAT_SHEET,
            SETTINGS
        ];
        let btnImgs = [];
        let img = loadImage(btnImageSpritesheet, () => {
            img.loadPixels();
            btnScenes.forEach((e, i, a) => {
                let subImg = img.get(0, i*11, 75, 11);
                btnImgs.push(scaleNearestNeighbor(subImg, 480, 70));
            });
            btnImgs.forEach((image, index) => {
                let btn = new ImageButton(
					image,										// The image to set
					0, 											// The x coordinate 
					index * 70 									// The y coordinate
				);
				btn
					.click(() => this.#changeScene(btnScenes[index]))           // The function to call when this button is clicked on
					.hover(() => {
						// console.log(`(${mouseX}, ${mouseY})`);
						noFill();
						strokeWeight(4);
						stroke(`hsla(${this.frame}, 100%, 50%, ${(Math.sin((6*this.frame * Math.PI)/180) + 1)/2})`);
						//console.log((Math.sin((this.frame * Math.PI)/180) + 1)/2);
						rect(btn.x, btn.y, btn.img.width, btn.img.height);
				        this.frame = (this.frame + 1) % 360;
					});        // The function to call when this button is hovered on
                this.imageButtons.push(btn);
            });
        });
		
        canvasManager.canvas.mouseClicked((event) => {
			this.imageButtons.forEach(button => button.clickCallback(event)); 
        });

        canvasManager.canvas.mouseMoved((event) => {
        });
    }

    draw() {
    	background(64, 64, 64);
        this.imageButtons.forEach(button => button.show());
       	this.imageButtons.forEach(button => button.hoverCallback());
    }
 }
