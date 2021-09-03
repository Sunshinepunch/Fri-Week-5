import { expect, test } from '@jest/globals';
import Human from '../src/planet.js';



describe ('Human', () => {

  test('should instantiate class Human', () => {
    class Human {
      constructor(myAge) {
        this.myAge= myAge;
      }
    }
    let human = new Human();
    expect(human).toBeDefined();
  })

  test('should return age as 20', () => {
    let human = new Human(20);
    expect(human.myAge).toEqual(20);
  })

  test('should return age as 83.33', () => {
    let human = new Human(20);
    human.mercuryAge();
    expect(human.myAge).toEqual(83.33);
  })
});


describe ('roundToTwo', () => {

  test('should return num as 83.33', () => {
  let num = 83.33334;
  let num2 = (Math.round(num + "e+2") + "e-2");
  console.log(roundToTwo(num2));
  expect(num2).toEqual(83.33)
})
});
