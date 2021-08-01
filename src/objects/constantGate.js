const ConstantGate = class extends Gate
{
	img;

	value;
	constructor(value)
	{
		this.value = value;
		this.img = loadImage("assets/textures/gates/Buffer.png");
	}

	answer()
	{
		return value;
	}
}
