import Scene from "../objects/scene.js";
import LifeBar from "../objects/lifeBar.js";


/**
 * This scene will manage the game's challenge mode.
 */
export default class ChallengeMode extends Scene {
    constructor() {
        super();
    }

    setup() {
        this.lifeBar = new LifeBar();
        /** 
         * Temporary code included, to test functionality of decreaseLife/increaseLife functions
         * 
        var decreaseButton = createButton("Decrease Life");
        var increaseButton = createButton("Increase Life");
        decreaseButton.mousePressed(() => this.lifeBar.decreaseLife());
        increaseButton.mousePressed(() => this.lifeBar.increaseLife());
        */
        
    }
    draw() {
        background(0, 0, 255);
        this.lifeBar.drawLifeBar();
        
    }

}