class Obstacle {
  constructor(ob) {
    this.x = ob.x;
    this.y = ob.y;
    this.w = ob.w;
    this.h = ob.h;
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}


class FSM extends Obstacle {
  constructor(ob) {
    // The FSM is an obstacle that moves in a series of spirals
    super(ob);
    this.radius = 10;
    this.angle = 0;
    this.originX = this.x - this.radius;
    this.originY = this.y;
    this.onTick = this.onTick.bind(this);
  }

  onTick() {
    //every tick the a new square is laid along the current spiral
      //if no parameter is defined, a random one is drawn and the squareWidth is zero
      // FSMs position is moved to the fartherest corner of square
    // this.squareWidth = Math.round((Math.pow(1.618034, this.nFibonacci) - Math.pow(-0.618034, this.nFibonacci)) / Math.sqrt(5));
    this.x = this.originX + Math.cos(this.angle)*this.radius;
    this.y = this.originY + Math.sin(this.angle)*this.radius;
    this.angle += 10;
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

export { Obstacle, FSM }
