<<<<<<< HEAD
const challengeMode = {
    "setup": function()
    {

    },
    "draw": function()
    {
=======
import Scene from "../objects/scene.js";

/**
 * This scene will manage the game's challenge mode.
 */
export default class ChallengeMode extends Scene {
    constructor() {
        super();
    }

    setup() {}
    draw() {
>>>>>>> origin/barnes/modules-refactor
        background(0, 0, 255);
    }
}