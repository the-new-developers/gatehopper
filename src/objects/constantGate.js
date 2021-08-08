import { Gate } from "Gate.js";

export class ConstantGate extends Gate
{
	constructor(value)
	{
		this.value = value;
		super(loadImage("assets/textures/gates/No Input Buffer.png"));
	}

	answer()
	{
		return value;
	}
}
