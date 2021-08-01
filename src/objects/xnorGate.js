const XnorGate = class extends TwoInputGate
{
	constructor(input1, input2)
	{
		super(input1, input2);
		this.img = loadImage("assets/textures/gates/XNOR Gate.png");
	}

	answer()
	{
		return !(this.input1.answer() ^ this.input2.answer());
	}
}
