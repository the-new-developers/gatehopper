// TODO: Add some documentation here.
export default class ImageButton {
	
	constructor(img, x, y)
	{
		this.img = img;
		this.x = x;
		this.y = y;
		this.clickCallback = function (event) {
			if (mouseX > x && mouseX < x + img.width && mouseY > y && mouseY < y + img.height)
			{
			
			}
		};
		this.hoverCallback = function (event) {
			if (mouseX > x && mouseX < x + img.width && mouseY > y && mouseY < y + img.height)
			{
			
			}
		};
	}

	show()
	{
		image(this.img, this.x, this.y);
	}

	/// <summary>
	/// Adds an action to the click action of the button
	/// </summary>
	/// <param name="callback">The action the button takes upon being clicked</param>
	/// <returns>"this" for chaining</returns>
	click(callback)
	{
		this.clickCallback = function (event) {
			if (mouseX > x && mouseX < x + img.width && mouseY > y && mouseY < y + img.height)
			{
				callback(event);
			}
		};
		return this;
	}

	/// <summary>
	/// Adds an action to the hover action of the button
	/// </summary>
	/// <param name="callback">The action the button takes upon being hovered over</param>
	/// <returns>"this" for chaining</returns>
	hover(callback)
	{
		this.hoverCallback = function (event) {
			if (mouseX > x && mouseX < x + img.width && mouseY > y && mouseY < y + img.height)
			{
				callback(event);
			}
		};
		return this;
	}
}
