let img;
let btn;
const cheatSheet = {
    "setup": function()
    {
        img = loadImage("assets/textures/CheatSheet.png");
        btn = createButton("Back to Main");
    },
    "draw": function()
    {
        image(img, 0, 0, width, height);
        btn.position(width/100*2, height/75*56);
        btn.mousePressed(() => currentScene = "Main Menu");
    }
};