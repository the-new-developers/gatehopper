import { Gate } from "gate.js";

export class OneInputGate extends Gate
{
	constructor(input, img)
	{
		if (this.constructor === OneInputGate)
		{
			throw new TypeError("Abstract class \"OneInputGate\" cannot be instantiated directly.");
		}
		this.input1 = input;
		super(img);
	}
}
