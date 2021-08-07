import Scene from "../objects/scene.js";

/**
 * This scene will manage our Game Over screen.
 */
export default class GameOver extends Scene {
    constructor() {
        super();
    }

    setup() {}
    draw() {
        background(0, 255, 255);
    }
}