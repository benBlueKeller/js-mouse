export default class Obstacle {
  constructor(obs) {
    this.x = obs.x;
    this.y = obs.y;
    this.w = obs.w;
    this.h = obs.h;
  }
}


export class FSM extends Obstacle {
  constructor(obs) {
    // The FSM is an obstacle that moves in a series of Fibonacci spirals
    super(obs);
    this.nFibonacci = 0;
    this.onTick = this.onTick.bind(this);
  }

  onTick() {
    //every tick the a new square is laid along the current spiral
      //if no parameter is defined, a random one is drawn and the squareWidth is zero
      // FSMs position is moved to the fartherest corner of square
    this.squareWidth = Math.round((Math.pow(1.618034, this.nFibonacci) - Math.pow(-0.618034, this.nFibonacci)) / Math.sqrt(5));
    this.current
    this.nFibonacci++;
  }
}
