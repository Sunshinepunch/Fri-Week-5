export class Human {
  constructor(myAge) {
    this.myAge = myAge
  }

  mercuryAge(myAge) {
    this.myAge /= 0.24
  }
}

export function roundToTwo(myAge) {
  return +(Math.round(myAge + "e+2")  + "e-2");
}




