
/**
 * This class will expose the p5 canvas, which we can use to set mouseclick listeners, as well as
 * properties involving the width and height of the canvas.
 */
class CanvasManager {

    // Dimensions of the canvas in pixels
    // TODO: Set these as the height and width of the window on load, and change them whenever the window is resized.
    /**
     * The width of the canvas.
     */
    width = 640;

    /**
     * The height of the canvas.
     */
    height = 480;

    /**
     * The p5 canvas.
     */
    canvas = {};

    /**
     * Initializes our p5 canvas.
     */
    createCanvas() {
        this.canvas = createCanvas(this.width, this.height);
    }
}

// Let's set this up as a singleton
const canvas = new CanvasManager();

export default canvas;