import MainMenu from "../scenes/mainMenu.js";
import CheatSheet from "../scenes/cheatSheet.js";

// Putting these strings in constants and passing around the constants 
// will help prevent typos that can cause run-time errors, and also make it easier
// to refactor should we decide to change any of these.
const MAIN_MENU = "Main Menu";
const CHALLENGE_MODE = "Challenge Mode";
const CHEAT_SHEET = "Cheat Sheet";
const GAME_OVER = "Game Over";
const INSTRUCTIONS = "Instructions";
const PRACTICE_MODE = "Practice Mode";
const SETTINGS = "Settings";

// Change this to change the scene between the options above
let currentScene = { value: MAIN_MENU };

// We'll use this to associate the string literal to the class
// We need to wrap the variable in square brackets so that the value is set as the name of the key,
// otherwise the key will be the name of the variable (i.e. { MAIN_MENU: MainMenu } vs. { "Main Menu": MainMenu })
const scenes = {
    [MAIN_MENU]: new MainMenu(),
    [CHEAT_SHEET]: new CheatSheet(),
    // "Challenge Mode": challengeMode, ///src/scenes/challengeMode.js
    // "Cheat Sheet": cheatSheet, ///src/scenes/cheatSheet.js
    // "Game Over": gameOver, ///src/scenes/gameOver.js
    // "Instructions": instructions, ///src/scenes/instructions.js
    // "Main Menu": mainMenu, ///src/scenes/mainMenu.js
    // "Practice Mode": practiceMode, ///src/scenes/practiceMode.js
    // "Settings": settings, ///src/scenes/settings.js
    // "Level Countdown": levelCountdown ///src/scenes/levelCountdown.js
};

export { 
    scenes, 
    currentScene, 
    MAIN_MENU, 
    CHALLENGE_MODE, 
    CHEAT_SHEET, 
    GAME_OVER, 
    INSTRUCTIONS, 
    PRACTICE_MODE, 
    SETTINGS 
};