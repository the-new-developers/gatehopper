import TwoInputGate from "./twoInputGate.js";

export default class XorGate extends TwoInputGate
{
	constructor(input1, input2, img)
	{
		super(input1, input2, img);
	}

	answer()
	{
		return this.input1.answer() ^ this.input2.answer();
	}
}
