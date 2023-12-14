import GameObject from 'c:/Users/samir/OneDrive/Desktop/jsfiles/JSgameEngineCA2/jsGameEngine/js/engine/gameobject';
import Renderer from '../engine/renderer.js';

class Background extends GameObject {
  constructor(x, y, width, height, imageUrl) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.imageUrl = imageUrl;

    // Load the background image
    this.image = new Image();
    this.image.src = imageUrl;

    // Set up renderer
    this.renderer = new Renderer();
  }

  render() {
    // Render the background image
    this.renderer.renderImage(this.image, this.x, this.y, this.width, this.height);
  }
}

export default Background; "c:/Users/samir/OneDrive/Desktop/jsfiles/JSgameEngineCA2/jsGameEngine/js/engine/gameobject"
