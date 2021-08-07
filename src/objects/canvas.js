
/**
 * This class will expose the p5 canvas, which we can use to set mouseclick listeners, as well as
 * properties involving the width and height of the canvas.
 */
class Canvas {

    // Dimensions of the canvas in pixels
    // TODO: Set these as the height and width of the window on load, and change them whenever the window is resized.
    width = 640;
    height = 480;

    p5Canvas = {};

    createCanvas() {
        this.p5Canvas = createCanvas(this.width, this.height);
    }
}

// Let's set this up as a singleton
const canvas = new Canvas();

export default canvas;