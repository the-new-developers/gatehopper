import { OneInputGate } from "OneInputGate.js";

export class NotGate extends OneInputGate
{
	constructor(input)
	{
		super(input, loadImage("assets/textures/gates/NOT Gate.png"));
	}

	answer()
	{
		return !this.input1.answer();
	}
}
