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
     * to accept an argument of how much 'life' is taken away, based on game action
     */
    decreaseLife(){
      if(this.width > 0){
      this.width -= 6;
      }
    }
  
    /**
     * increases width of dynamic rectangle; this function may be unnecessary, depending on whether player can
     * get 'bonus life', to replenish 'life level'; depending on functionality of game, this function could be changed
     * to include a parameter of how much 'life' is added, based on game action
     */
    increaseLife(){
      if(this.width < 168){
      this.width += 6;
      }
    }
  
    /**
     * used to return 'life level'; once this reaches zero, game is over
     * 
     * @returns width of dynamically changing rectangle representing 'life level'
     */
    getLifeLevel(){
      return this.width;
    }
  }