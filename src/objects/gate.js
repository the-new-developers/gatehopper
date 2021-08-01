const Gate = class
{
	img = createImage(16, 16);

	constructor()
	{
		if (this.constructor === Gate)
		{
			throw new TypeError("Abstract class \"Gate\" cannot be instantiated directly.");
		}
	}

	answer()
	{
		if (this.schema === undefined)
		{
			throw new TypeError("Classes extending \"Gate\" must implement \"answer()\"");
		}
	}

	show(x, y, w, h)
	{
		image(scaleNearestNeighbor(this.img, w, h), x, y);
	}
}
