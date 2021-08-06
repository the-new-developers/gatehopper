import Scene from "../objects/scene.js";
import { scaleNearestNeighbor } from "../helperFunctions/imageFunctions.js";
import ImageButton from "../objects/imageButton.js";
import { scenes, currentScene, CHALLENGE_MODE, PRACTICE_MODE, INSTRUCTIONS, CHEAT_SHEET, SETTINGS } from "./scenes.js";
import { canvas } from "../index.js";

export default class MainMenu extends Scene {
    constructor() { 
        super(); 
        this.imageButtons = [];
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
                let btn = new ImageButton(image, 0, index * 70, () => {
                    currentScene.value = btnScenes[index];
                    btns.forEach(button => {
                        button.destroy();
                    });
                    scenes[currentScene.value].setup();
                });
                this.imageButtons.push(btn);
            });
        });
        //canvas.mouseClicked(event => this.imageButtons.forEach(button => button.callback(event)));
        canvas.mousePressed(() => { 
            console.log({ currentScene })
            currentScene.value = CHEAT_SHEET
            scenes[currentScene.value].setup();
        });
    }

    draw() {
        this.imageButtons.forEach(button => button.show());
    }
 }
