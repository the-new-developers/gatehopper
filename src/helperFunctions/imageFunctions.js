// The nearest neighbor algorithm as described by:
// https://tech-algorithm.com/articles/nearest-neighbor-image-scaling/
const scaleNearestNeighbor = function(image, targetWidth, targetHeight)
{
	image.loadPixels();
	let tmp = createImage(targetWidth, targetHeight);
	let wRatio = image.width/targetWidth;
	let hRatio = image.height/targetHeight;
	for (let i = 0; i < targetWidth; i++)
	{
		for (let j = 0; j < targetHeight; j++)
		{
			const x = Math.floor(i*wRatio);
			const y = Math.floor(j*hRatio);
			tmp.set(i, j, image.get(x, y));
		}
	}
	tmp.updatePixels();
	return tmp;
}

export { scaleNearestNeighbor }
