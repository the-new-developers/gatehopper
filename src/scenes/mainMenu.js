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
        this.btnImgs = [];
        this.img = null;
        this.btnScenes = [
             CHALLENGE_MODE,
             PRACTICE_MODE,
             INSTRUCTIONS,
             CHEAT_SHEET,
             SETTINGS
        ];
    }

	/**
	 * Our own private method for changing scenes.
	 * @param {string} sceneName The name of the scene we want to change to.
	 */
	#changeScene(sceneName) {
		this.imageButtons = [];
		sceneManager.setCurrentScene(sceneName);
	}

	preload()
	{
		const btnImageSpriteSheet = "assets/textures/mainMenu/buttons.png";
		let promise = new Promise((resolve, reject) => {
			this.img = loadImage(btnImageSpriteSheet, () =>
			{
				this.img.loadPixels();
				this.btnScenes.forEach((e, i, a) => {
		            let subImg = this.img.get(0, i*11, 75, 11);
		            this.btnImgs.push(scaleNearestNeighbor(subImg, 480, 70));
		        });
		        resolve(true);
			})
		});
		return [promise];
	}

    setup() {
        
        this.btnImgs.forEach((image, index) => {
            let btn = new ImageButton(
				image,										// The image to set
				0, 											// The x coordinate 
				index * 70,									// The y coordinate
				() => this.#changeScene(this.btnScenes[index])	// The function to call when this button is clicked on
			);
            this.imageButtons.push(btn);
        });
		
        canvasManager.canvas.mouseClicked((event) => {
			for (let i of this.imageButtons)
				i.callback(event); 
        });
    }

    draw() {
        this.imageButtons.forEach(button => button.show());
    }
 }
