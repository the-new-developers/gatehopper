import { XorGate } from "xorGate.js";

export class XnorGate extends XorGate
{
	constructor(input1, input2, img)
	{
		super(input1, input2, img);
	}

	answer()
	{
		return !super.answer();
	}
}
