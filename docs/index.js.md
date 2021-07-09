## How it functions

P5.js operates on a setup/draw system and each scene is a function meant to act
like a draw function. When adding a new scene, add the function to the
dictionary, add a new file, add it to the scripts above the script tag for
mainMenu.js with the defer tag in index.html. These are changed out on the fly
by changing the element that is being pointed to in the dictionary.