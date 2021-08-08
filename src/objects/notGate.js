import { OneInputGate } from "OneInputGate.js";

export class NotGate extends OneInputGate
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
