import { TwoInputGate } from "TwoInputGate.js";

export class AndGate extends TwoInputGate
{
	constructor(input1, input2, img)
	{
		super(input1, input2, img);
	}

	answer()
	{
		return this.input1.answer() & this.input2.answer();
	}
}
