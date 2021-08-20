
/**
 * We'll use this class to help us manage our scenes;
 * It will expose a simple API, and hide its inner workings
 * to any callers.
 */
class SceneManager { 

    // Putting the '#' in front of our property here makes it a private property, accessible only to this class.
    #current_scene = MAIN_MENU;

    // We'll use this to associate the string literal to the class
    // We need to wrap the variable in square brackets so that the value is set as the name of the key,
    // otherwise the key will be the name of the variable (i.e. { MAIN_MENU: MainMenu } vs. { "Main Menu": MainMenu })
    #scenes = {
        [MAIN_MENU]: new MainMenu(),
        [CHEAT_SHEET]: new CheatSheet(),
        [CHALLENGE_MODE]: new ChallengeMode(),
        [GAME_OVER]: new GameOver(),
        [INSTRUCTIONS]: new Instructions(),
        [PRACTICE_MODE]: new PracticeMode(),
        [SETTINGS]: new Settings(),
        sceneIter: function* ()
        {
        	for (let i of sceneManager.getValidScenes())
        	{
				yield this[i];
           	}
        }
    };

    #valid_scenes = [
        MAIN_MENU,
        CHALLENGE_MODE,
        CHEAT_SHEET,
        GAME_OVER,
        INSTRUCTIONS,
        PRACTICE_MODE,
        SETTINGS
    ]

    /**
     * @returns The child Scene class that is currently set.
     */
    getCurrentScene() {
        return this.#scenes[this.#current_scene];
    }

    /**
     * Validates and sets the current scene.
     * If the desired scene doesn't exist, this method fails silently.
     * @param {string} sceneName The scene name to set. See sceneConstants.js for valid values.
     * @returns void
     */
    setCurrentScene(sceneName) {
        if (!this.#valid_scenes.some(scene => scene === sceneName))
            return;

        this.#current_scene = sceneName;
        this.getCurrentScene().setup();
    }

    getScenes()
    {
    	return this.#scenes;
    }

    getValidScenes()
    {
    	return this.#valid_scenes;
    }
}

// We only ever want one instance of this class (a singleton), so we will instantiate it here and then export that single instantiation.
const sceneManager = new SceneManager();

export default sceneManager;
