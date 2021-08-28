import Scene from "../objects/scene.js";
import canvas from "../objects/canvasManager.js";

/**
 * This scene will manage our Game Over screen.
 */
export default class GameOver extends Scene {
    constructor() {
        super();
    }

    setup() {
        this.gameOverText = createDiv('Game Over');
        this.gameOverText.addClass('game-over');
        this.gameOverText.position(canvas.width/4, canvas.height/2);
    }

    draw() {
        background('black');
    }
}