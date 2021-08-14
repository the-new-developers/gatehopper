import Gate from "./gate.js";

export default class ConstantGate extends Gate
{
	constructor(value, img)
	{
		super(img);
		this.value = value;
	}

	answer()
	{
		return this.value;
	}
}
