import Gate from "./gate.js";

export default class OneInputGate extends Gate
{
	constructor(input, img)
	{
		super(img);
		if (this.constructor === OneInputGate)
		{
			throw new TypeError("Abstract class \"OneInputGate\" cannot be instantiated directly.");
		}
		this.input1 = input;
	}
}
