export class Human {
  constructor(myAge, myLE) {
    this.myAge = myAge
    this.myLE = myLE
    this.myMercuryAge = []
    this.myVenusAge = []
    this.myMarsAge = []
    this.myJupiterAge = []
  }

  mercuryAge() {
    let mercAge = this.myAge / 0.24;
    this.myAge = roundToTwo(mercAge);
    this.myMercuryAge.push(this.myAge);
    return this.myAge;
  }

  mercuryLE() {
    let mercLE = this.myLE / 0.24;
    this.myLE = roundToTwo(mercLE);
    return this.myLE;
  }

  venusAge() {
    let venusAge = this.myAge / 0.62;
    this.myAge = roundToTwo(venusAge);
  }

  marsAge() {
    let marsAge = this.myAge / 1.88;
    this.myAge = roundToTwo(marsAge);
  }

  jupiterAge() {
    let jupiterAge = this.myAge / 11.86;
    this.myAge = roundToTwo(jupiterAge);
  }
}

export function roundToTwo(myAge) {
  return +(Math.round(myAge + "e+2")  + "e-2");
}

export function timeLeft(myLE,myAge) {
  let time = roundToTwo(myLE - myAge);
  if (time > 0) {
    return time;
  }else if (time <= 0) {
    return "Yikes. You would have died " + Math.abs(time) + " years ago.";
  } else {
    return "You've done something to fiddle with space time. Put it back."
  }
}




