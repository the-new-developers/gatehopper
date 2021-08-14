import Scene from "../objects/scene.js";
import ConstantGate from "../objects/constantGate.js";
import AndGate from "../objects/andGate.js";

/**
 * This scene will manage the game's challenge mode.
 */
export default class ChallengeMode extends Scene {
    constructor() {
        super();
    }

    setup() {
    	this.constant1;
    	this.constant2;
    	this.gate;
    	let img = loadImage("assets/textures/gates/No Input Buffer.png");
   		this.constant1 = new ConstantGate(1, img);
   		this.constant2 = new ConstantGate(1, img);
   		img = loadImage("assets/textures/gates/AND Gate.png");
  		this.gate = new AndGate(this.constant1, this.constant2, img)
    }
    
    draw() {
        background(0, 0, 255);
        this.constant1.show(100, 100);
        this.constant2.show(100, 200);
        this.gate.show(150, 150);
    }
}
