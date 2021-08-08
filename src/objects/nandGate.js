import { TwoInputGate } from "twoInputGate.js";

export class NandGate extends TwoInputGate
{
	constructor(input1, input2)
	{
		super(input1, input2, loadImage("assets/textures/gates/NAND Gate.png"));
	}

	answer()
	{
		return !(this.input1.answer() & this.input2.answer());
	}
}
