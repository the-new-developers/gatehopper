import OneInputGate from "./oneInputGate.js";

export default class NotGate extends OneInputGate
{
	constructor(input, img)
	{
		super(input, img);
	}

	answer()
	{
		return !this.input1.answer();
	}
}
