import Scene from "../objects/scene.js";
import { GateFactory, GateTypeEnum } from "../objects/gateFactory.js";
import LifeBar from "../objects/lifeBar.js";

/**
 * This scene will manage the game's challenge mode.
 */
export default class ChallengeMode extends Scene {
    constructor() {
        super();
        this.gates = [];
    }

    setup() {
      this.lifeBar = new LifeBar();
    	this.gateFactory = new GateFactory();
    	Promise
    		.all(this.gateFactory.preload())
    		.then(() =>
    		{
    			//This callback will be moved to setup once the preloader is added
    			this.constant1 = this.gateFactory.create(GateTypeEnum.CONST, 0);
    			this.constant2 = this.gateFactory.create(GateTypeEnum.CONST, 1);

				this.gates.push(
					this.gateFactory.create(
						1, this.constant1
					)
				);

    			for (let i = 2; i < 8; i++)
    			{
    				this.gates.push(
    					this.gateFactory
    						.create(i,
    							this.constant1,
    							this.constant2)
    				);
    			}
    		})
    		.finally();
    }
    
    draw() {
        background(0, 0, 255);
        this.constant1.show(100, 100);
        this.constant2.show(100, 200);
        for (let i = 0; i < this.gates.length; i++)
              this.gates[i].show(150, 150 + i * 50);
        this.lifeBar.drawLifeBar();
    }
}
