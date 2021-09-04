import Scene from "../objects/scene.js";
import ConstantGate from "../objects/constantGate.js";
import AndGate from "../objects/andGate.js";

/**
 * This scene will manage the game's challenge mode.
 */
export default class ChallengeMode extends Scene {
    constructor() {
        super();
        this.bufferImg = null;
        this.notImg = null;
        this.andImg = null;
        this.orImg = null;
        this.xorImg = null;
        this.nandImg = null;
        this.norImg = null;
        this.xnorImg = null;
    	this.constant1 = null;
    	this.constant2 = null;
    	this.gate = null;
    }

    preload()
    {
    	let promises = [
    		new Promise((resolve, reject) => {
		    	this.bufferImg = loadImage("assets/textures/gates/No Input Buffer.png");
		    	resolve(true);
    		}),
    		new Promise((resolve, reject) => {
		    	this.notImg = loadImage("assets/textures/gates/NOT Gate.png");
		    	resolve(true);
    		}),
    		new Promise((resolve, reject) => {
		    	this.andImg = loadImage("assets/textures/gates/AND Gate.png");
		    	resolve(true);
    		}),
    		new Promise((resolve, reject) => {
		    	this.orImg = loadImage("assets/textures/gates/OR Gate.png");
		    	resolve(true);
    		}),
    		new Promise((resolve, reject) => {
		    	this.xorImg = loadImage("assets/textures/gates/XOR Gate.png");
		    	resolve(true);
    		}),
    		new Promise((resolve, reject) => {
		    	this.nandImg = loadImage("assets/textures/gates/NAND Gate.png");
		    	resolve(true);
    		}),
    		new Promise((resolve, reject) => {
		    	this.norImg = loadImage("assets/textures/gates/NOR Gate.png");
		    	resolve(true);
    		}),
    		new Promise((resolve, reject) => {
		    	this.xnorImg = loadImage("assets/textures/gates/XNOR Gate.png");
		    	resolve(true);
    		})
   		];
   		return promises;
    }

    setup() {
   		this.constant1 = new ConstantGate(1, this.bufferImg);
   		this.constant2 = new ConstantGate(1, this.bufferImg);
  		this.gate = new AndGate(this.constant1, this.constant2, this.andImg);
    }
    
    draw() {
        background(0, 0, 255);
        this.constant1.show(100, 100);
        this.constant2.show(100, 200);
        this.gate.show(150, 150);
    }
}
