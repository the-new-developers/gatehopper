const btnImageSpritesheet = "assets/textures/mainMenu/buttons.png";
const btnScenes = [
	"Challenge Mode",
	"Practice Mode",
	"Instruction",
	"Cheat Sheet",
	"Settings"
];
let btnImgs = [];
let btns = [];

const mainMenu = {
    "setup": function()
    {
    	btnImgs = [];
    	btns = [];
    	let img = loadImage(btnImageSpritesheet, () => {
    		img.loadPixels();
    		btnScenes.forEach((e, i, a) => {
				let subImg = img.get(0, i*11, 75, 11);
    			btnImgs.push(scaleNearestNeighbor(subImg, 480, 70));
    		});
    		btnImgs.forEach((e, i, a) => {
    			let btn = new ImageButton(e, 0, i*70, () => {
    				currentScene = btnScenes[i];
    				btns.forEach((e, i, a) => {
    					e.destroy();
    				});
    				scenes[currentScene]["setup"]();
    			});
    			btn.init();
    			btns.push(btn);
    		});
    	});
    },
    "draw": function()
    {
        background(255, 0, 255);
    }
}
