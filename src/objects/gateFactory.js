import Gate from "./gates/gate.js"
import ConstantGate from "./gates/constantGate.js";
import NotGate from "./gates/notGate.js";
import OrGate from "./gates/orGate.js";
import AndGate from "./gates/andGate.js";
import XorGate from "./gates/xorGate.js";
import NorGate from "./gates/norGate.js";
import NandGate from "./gates/nandGate.js";
import XnorGate from "./gates/xnorGate.js";
import { scaleNearestNeighbor } from "../helperFunctions/imageFunctions.js";

const GateTypeEnum = {
	CONST: 0,
	NOT: 1,
	OR: 2,
	AND: 3,
	XOR: 4,
	NOR: 5,
	NAND: 6,
	XNOR: 7
};

class GateFactory
{
	constructor(width = 16, height = 16)
	{
		this.width = width;
		this.height = height;
		this.imagePaths = [
			"assets/textures/gates/No Input Buffer.png",
			"assets/textures/gates/NOT Gate.png",
			"assets/textures/gates/OR Gate.png",
			"assets/textures/gates/AND Gate.png",
			"assets/textures/gates/XOR Gate.png",
			"assets/textures/gates/NOR Gate.png",
			"assets/textures/gates/NAND Gate.png",
			"assets/textures/gates/XNOR Gate.png"
		];
		this.images = [];
	}

	preload()
	{
		let promises = [];
   		for (let i = 0; i < this.imagePaths.length; i++)
		{
			promises.push(new Promise((resolve, reject) => {
		    	this.images[i] = loadImage(this.imagePaths[i], () => {
		    		this.images[i] = scaleNearestNeighbor(
		    			this.images[i],
		    			this.width,
		    			this.height)
		    	});
		    	resolve(true);
	    	}));
		}
   		return promises;
	}

	create(gateType, input1, input2)
	{
		switch(gateType)
		{
			case GateTypeEnum.CONST:
				return new ConstantGate(input1, this.images[GateTypeEnum.CONST]);
				break;
			case GateTypeEnum.NOT:
				return new NotGate(input1, this.images[GateTypeEnum.NOT]);
				break;
			case GateTypeEnum.OR:
				return new OrGate(input1, input2, this.images[GateTypeEnum.OR]);
				break;
			case GateTypeEnum.AND:
				return new AndGate(input1, input2, this.images[GateTypeEnum.AND]);
				break;
			case GateTypeEnum.XOR:
				return new XorGate(input1, input2, this.images[GateTypeEnum.XOR]);
				break;
			case GateTypeEnum.NOR:
				return new NorGate(input1, input2, this.images[GateTypeEnum.NOR]);
				break;
			case GateTypeEnum.NAND:
				return new NandGate(input1, input2, this.images[GateTypeEnum.NAND]);
				break;
			case GateTypeEnum.XNOR:
				return new XnorGate(input1, input2, this.images[GateTypeEnum.XNOR]);
				break;
		}
	}
}

export { GateTypeEnum, GateFactory }
