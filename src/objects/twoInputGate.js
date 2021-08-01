const TwoInputGate = class extends OneInputGate
{
	input2;

	constructor(input1, input2)
	{
		if (this.constructor === TwoInputGate)
		{
			throw new TypeError("Abstract class \"TwoInputGate\" cannot be instantiated directly.");
		}
		this.input2 = input2;
		super(input1);
	}

	answer()
	{
		if (this.schema === undefined)
		{
			throw new TypeError("Classes extending \"TwoInputGate\" must implement \"answer()\"");
		}
	}
}
