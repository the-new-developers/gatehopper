let timer = 3; //Countdown timer
let midLine; //Horizontal line in the scene
let midLine2; //Vertical line in the scene
let animatedLine; //Line that will circle around during the countdown
let angle=0; //Angle the animatedLine will use to circle around
let finishedCountdown = false; //Boolean to stop the line from circling around when countdown stops

const levelCountdown = function()
{
    background(130); //Setting up background color
    textAlign(CENTER); //Aligning timer text to be in center  
    textSize(100); //Changing size of text
    text(timer, width/2, height/2); //Adding text to the scene
    
    stroke('black'); //Setting up the color of the brush
    fill('black'); //Setting the fill color of the shapes
    strokeWeight(3); //Setting up the size of the brush

    midLine = line(0,240,640,240); //Drawing the first middle line
    midLine2 = line(320,0,320,480); //Drawing the second middle line
    
    stroke('white');
    noFill(); //Disabling filling
    strokeWeight(4);
    
    //Creating two circles
    circle1 = circle(320,240, 300);
    circle2 = circle(320,240, 350);

    stroke('black');
    fill('black');
    strokeWeight(3);

    //Condition to check if countdown is finished
    if(!finishedCountdown){
        
        //The next 4 lines add the animation to the line that should circle around
        translate(width/2, height/2);
        rotate(angle);
        animatedLine = line(0, 0, 480, 0);
        angle += 0.1;
    }
    
    /**
     * (frameCount is a variable that keeps track of the number of frames that have been displayed since program started)
     * The following condition checks if it's been 1 second and the timer bigger than 0:
     * 1- It decreases the  timer if condition is satisfied.
     * 2- If condition is satisfied and timer equals 0 after decreasing it, the word "Start" will be displayed and line that circles around will stop.
     */
    if(frameCount % 60 == 0 && timer > 0) {
        timer --;

        if (timer == 0){
            timer = "Start";
            animatedLine = line(0, 0, 0, 0);
            finishedCountdown = true;
        }
    }
    
}