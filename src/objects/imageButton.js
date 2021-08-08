// TODO: Add some documentation here.
export default class ImageButton {
>>>>>>> origin/barnes/modules-refactor
	
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
}
