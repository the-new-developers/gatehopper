let cheatSheetImg;
let cheatSheetBtnImg;
let cheatSheetBtn;
const cheatSheet = {
    "setup": function()
    {
		cheatSheetImg = loadImage("assets/textures/CheatSheet.png",
			() => cheatSheetImg = scaleNearestNeighbor(cheatSheetImg, width, height));
		cheatSheetBtnImg = loadImage("assets/textures/CheatSheetBackButton.png",
			() => {
				cheatSheetBtnImg = scaleNearestNeighbor(cheatSheetBtnImg, 301, 103);
				cheatSheetBtn = new ImageButton(cheatSheetBtnImg, 13, 359,
					() => {
						currentScene = "Main Menu";
						cheatSheetBtn.destroy();
						scenes[currentScene]["setup"]();
					});
				cheatSheetBtn.init();
			});
    },
    "draw": function()
    {
        image(cheatSheetImg, 0, 0);
    }
};
