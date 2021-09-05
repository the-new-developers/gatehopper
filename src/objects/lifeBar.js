/**
 * LifeBar class creates a life bar object, setting x/y coordinates and sizes of background image, and of 
 * dynamically changing rectangle representing 'life level'.
 * 
 * Some temporary test code was included in challengeMode.js; please uncomment it, and test dynamic changes of
 * LifeBar object using buttons
 */
 export default class LifeBar {
    constructor(){
        this.xCord = 56;//x coordinate of dynamically changing rectangle
        this.yCord = 37;//y coordinate of dynamically changing rectangle
        this.width = 168;//width of dynamically changing rectanle
        this.height = 21;//height of dynamically changing rectangle
        this.borderRadius = 3;
        this.imgXCord = 50;//x coordinate of background bar image
        this.imgYCord = 30;//y coordinate of background bar image
        this.imgWidth = 180;//width of background bar image
        this.imgHeight = 35;//height of background bar image
        this.img = loadImage("assets/textures/challengeMode/lifeBar.png");//load image from assests
        this.health = 100;//represented by width of dynamic rectangle, shows how much 'health' player has left
    }
  
    /**
     * draws LifeBar object instance
     */
    drawLifeBar(){
      image(this.img, this.imgXCord, this.imgYCord, this.imgWidth, this.imgHeight);//draws background image
      fill(0, 255, 0);//sets dynamic rectangle colour to green
      rect(this.xCord, this.yCord, this.width, this.height, this.borderRadius);//draws dynamic green rectangle
    }
  
    /**
     * decreases width of dynamic rectangle; depending on functionality of game, this function could be changed
     * to accept an argument of how much health is taken away, based on game action
     */
    decreaseLife(){
      if(this.width > 0){
      this.width -= 6;
      this.health -= 100/28;
      }
    }
  
    /**
     * increases width of dynamic rectangle; this function may be unnecessary, depending on whether player can
     * get 'bonus health', to replenish 'health'; depending on functionality of game, this function could be changed
     * to include a parameter of how much health is added, based on game action
     */
    increaseLife(){
      if(this.width < 168){
      this.width += 6;
      this.health += 100/28;
      }
    }
  
    /**
     * used to return health; once this reaches zero, game is over
     * 
     * @returns width of dynamically changing rectangle representing 'health'
     */
    getHealth(){
      return Math.abs(Math.trunc(this.health));
    }
  }