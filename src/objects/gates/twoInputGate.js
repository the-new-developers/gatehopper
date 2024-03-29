import OneInputGate from "./oneInputGate.js";

export default class TwoInputGate extends OneInputGate
{
	input2;

	constructor(input1, input2, img)
	{
		super(input1, img);
		if (this.constructor === TwoInputGate)
		{
			throw new TypeError("Abstract class \"TwoInputGate\" cannot be instantiated directly.");
		}
		this.input2 = input2;
	}
}
