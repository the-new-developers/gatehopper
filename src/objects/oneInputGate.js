const OneInputGate = class extends Gate
{
	input1;

	constructor(input)
	{
		if (this.constructor === OneInputGate)
		{
			throw new TypeError("Abstract class \"OneInputGate\" cannot be instantiated directly.");
		}
		this.input1 = input;
	}

	answer()
	{
		if (this.schema === undefined)
		{
			throw new TypeError("Classes extending \"OneInputGate\" must implement \"answer()\"");
		}
	}
}
