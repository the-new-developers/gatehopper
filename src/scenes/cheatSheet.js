import Scene from "../objects/scene.js";
import { scaleNearestNeighbor } from "../helperFunctions/imageFunctions.js";
import ImageButton from "../objects/imageButton.js";
import { currentScene, scenes, MAIN_MENU } from "../scenes/scenes.js";

export default class CheatSheet extends Scene {
	constructor() {
		super();
		this.cheatSheetImg = {};
		this.cheatSheetBtnImg = {};
		this.cheatSheetBtn = {};
	}

	setup() {
		this.cheatSheetImg = loadImage("assets/textures/CheatSheet.png",
			() => this.cheatSheetImg = scaleNearestNeighbor(this.cheatSheetImg, 640, 480));
		this.cheatSheetBtnImg = loadImage("assets/textures/CheatSheetBackButton.png",
			() => {
				this.cheatSheetBtnImg = scaleNearestNeighbor(this.cheatSheetBtnImg, 301, 103);
				this.cheatSheetBtn = new ImageButton(this.cheatSheetBtnImg, 13, 359,
					() => {
						currentScene = MAIN_MENU;
						this.cheatSheetBtn.destroy();
						scenes[currentScene]["setup"]();
					});
				this.cheatSheetBtn.init();
			});
	}

	draw() {
		image(this.cheatSheetImg, 0, 0);
		image(this.cheatSheetBtnImg, 13, 359);
	}
}