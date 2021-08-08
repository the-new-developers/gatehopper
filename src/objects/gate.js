export class Gate
{
	constructor(img)
	{
		if (this.constructor === Gate)
		{
			throw new TypeError("Abstract class \"Gate\" cannot be instantiated directly.");
		}
		this.img = img;
	}

	answer()
	{
		if (this.schema === undefined)
		{
			throw new TypeError("Classes extending \"Gate\" must implement \"answer()\"");
		}
	}

	show()
	{
		image(this.img);
	}
}
