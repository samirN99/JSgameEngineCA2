import {Images} from '../engine/resources.js';
import Renderer from "./renderer.js";
import Component from './component.js';

class Animation extends Component{

constructor(){
    super();
    this.gameAnim= []; 
    this.currentFrame = 0;
    this.speed = 0.5;
    this.currentAnim = 0;
}

addAnimation(animation){
    this.gameAnim.push(animation);
}

update(deltaTime){
    this.currentFrame+= deltaTime * this.speed;
    if(this.currentFrame >= this.gameAnim[this.currentAnim].length){
        this.currentFrame = 0;
    }
    let renderer = this.gameObject.getComponent(Renderer);
    renderer.image = this.gameAnim[this.currentAnim][Math.floor(this.currentFrame)];
}


}
export default Animation;