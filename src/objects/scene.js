/**
 * This is the parent class to all of our child scene classes.
 * In another language like C#, this might be an abstract class or an interface;
 * we never want to instantiate this class directly.
 */
export default class Scene {
	preload() {
		return [];
	}
    setup() {}
    draw() {
        background(0, 0, 0);
    }
}
