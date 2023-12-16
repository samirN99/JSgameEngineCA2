import {Images} from '../engine/resources.js';
import Renderer from "./renderer.js";
import Component from './component.js';

class Animation extends Component{

constructor(){
    super();                // call the constructer
    this.gameAnim= [];          //array for animation
    this.currentFrame = 0;      //current frame rate
    this.speed = 0.5;
    this.currentAnim = 0;
}

addAnimation(animation){        //// Method to add an animation to the gameAnim array
    this.gameAnim.push(animation);
}

update(deltaTime){                           // Method to update the animation state based on elapsed time (deltaTime)
    this.currentFrame+= deltaTime * this.speed;
    if(this.currentFrame >= this.gameAnim[this.currentAnim].length){
        this.currentFrame = 0;
    }
    let renderer = this.gameObject.getComponent(Renderer);
    renderer.image = this.gameAnim[this.currentAnim][Math.floor(this.currentFrame)];     // Update the image property of the Renderer with the current frame of the current animation
}


}
export default Animation;