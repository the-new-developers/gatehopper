let gameOverBtnImg;
let gameOverBtn;

const gameOver = {
    "setup": function()
    {
		gameOverBtnImg = loadImage("assets/textures/ReturnButton.png",
			() => {
				gameOverBtnImg = scaleNearestNeighbor(gameOverBtnImg, 301, 103);
				gameOverBtn = new ImageButton(gameOverBtnImg, 13, 359,
					() => {
						currentScene = "Main Menu";
						gameOverBtn.destroy();
						scenes[currentScene]["setup"]();
					});
				gameOverBtn.init();
			});
    },
    "draw": function()
    {
        background(0, 255, 255);
    }
}