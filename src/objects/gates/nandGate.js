import AndGate from "./andGate.js";

export default class NandGate extends AndGate
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
