import { scaleNearestNeighbor } from "../helperFunctions/imageFunctions.js"

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

	show(x, y)
	{
		image(this.img, x, y);
	}

	// This function should be used only occasionally
	// Scaling apparently is very intensive on
	show(x, y, width, height)
	{
		image(scaleNearestNeighbor(img, width, height), x, y);
	}
}
