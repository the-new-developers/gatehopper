import { OrGate } from "orGate.js";

export class NorGate extends OrGate
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
