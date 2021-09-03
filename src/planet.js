export class Human {
  constructor(myAge) {
    this.myAge = myAge
  }

  mercuryAge() {
    let mercAge = this.myAge / 0.24;
    this.myAge = roundToTwo(mercAge);
  }

  venusAge() {
    let venusAge = this.myAge / 0.62;
    this.myAge = roundToTwo(venusAge);
  }

  marsAge() {
    let marsAge = this.myAge / 1.88;
    this.myAge = roundToTwo(marsAge);
  }
}

export function roundToTwo(myAge) {
  return +(Math.round(myAge + "e+2")  + "e-2");
}




