const NotGate = class extends OneInputGate
{
	constructor(input)
	{
		super(input);
		this.img = loadImage("assets/textures/gates/NOT Gate.png");
	}

	answer()
	{
		return !this.input1.answer();
	}
}
