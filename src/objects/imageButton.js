// let imageButtons = [];

// const ImageButton = class
// {
// 	img;
// 	x;
// 	y;
// 	callback;
	
// 	constructor(img, x, y, callback)
// 	{
// 		this.img = img;
// 		this.x = x;
// 		this.y = y;
// 		this.callback = function (event) {
// 			if (mouseX > x && mouseX < x + img.width && mouseY > y && mouseY < y + img.height)
// 			{
// 				callback(event);
// 			}
// 		};
// 	}

// 	show()
// 	{
// 		image(this.img, this.x, this.y);
// 	}

// 	init()
// 	{
// 		if (imageButtons.indexOf(this) == -1)
// 			imageButtons.push(this);
// 	}

// 	destroy()
// 	{
// 		imageButtons.splice(imageButtons.indexOf(this), 1);
// 	}
// }

export default class ImageButton {
	
	constructor(img, x, y, callback)
	{
		this.img = img;
		this.x = x;
		this.y = y;
		this.callback = function (event) {
			if (mouseX > x && mouseX < x + img.width && mouseY > y && mouseY < y + img.height)
			{
				callback(event);
			}
		};
	}

	show()
	{
		image(this.img, this.x, this.y);
	}

	init()
	{
		// if (imageButtons.indexOf(this) == -1)
		// 	imageButtons.push(this);
	}

	destroy()
	{
		// imageButtons.splice(imageButtons.indexOf(this), 1);
	}
}
