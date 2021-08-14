import { scaleNearestNeighbor } from "../helperFunctions/imageFunctions.js";

export default class Gate
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

	show(x, y)
	{
		if (this.answer())
			tint("#ffff00");
		image(this.img, x, y);
		noTint();
	}

	// This function should be used only occasionally
	// Scaling apparently is very intensive on
	showScaled(x, y, width, height)
	{
		image(scaleNearestNeighbor(this.img, width, height), x, y);
	}
}
