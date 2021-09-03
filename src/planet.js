export class Human {
  constructor(myAge) {
    this.myAge = myAge
  }

  mercuryAge(myAge) {
    let mercAge = myAge / 0.24;
    myAge = roundToTwo(mercAge);
  }
}

export function roundToTwo(myAge) {
  return +(Math.round(myAge + "e+2")  + "e-2");
}




