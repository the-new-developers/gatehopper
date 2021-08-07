import Scene from "../objects/scene.js";
import { scaleNearestNeighbor } from "../helperFunctions/imageFunctions.js";
import ImageButton from "../objects/imageButton.js";
import sceneManager from "../objects/sceneManager.js";
import canvas from "../objects/canvas.js";
import { CHALLENGE_MODE, PRACTICE_MODE, INSTRUCTIONS, CHEAT_SHEET, SETTINGS } from "../constants/sceneConstants.js";

export default class MainMenu extends Scene {
    constructor() { 
        super(); 
        this.imageButtons = [];
    }

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
					index * 70,									// The y coordinate
					() => { 
						console.log(btnScenes[index])
						this.#changeScene(btnScenes[index])
						}	// The function to call when this button is clicked on
				);
                this.imageButtons.push(btn);
            });
        });
		
        // canvas.p5Canvas.mousePressed(() => { 
        //     sceneManager.setCurrentScene(CHEAT_SHEET);
        // });
    }

    draw() {
        this.imageButtons.forEach(button => button.show());
    }
 }
