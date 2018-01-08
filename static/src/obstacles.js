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
    super(obs);

  }
}
