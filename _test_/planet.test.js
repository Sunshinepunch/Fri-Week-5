
import {Human, roundToTwo } from '../src/planet.js';



describe ('Human', () => {

  test('should instantiate class Human', () => {
    let human = new Human();
    expect(human).toBeDefined();
  })

  test('should return age as 20', () => {
    let human = new Human(20);
    expect(human.myAge).toEqual(20);
  })

  test('should return age as 83.33333333333334', () => {
    let human = new Human(20);
    human.myAge /= 0.24;
    expect(human.myAge).toEqual(83.33333333333334);
  })

  test('should return age as 83.33', () => {
    let human = new Human(20);
    human.mercuryAge();
    // console.log(human.myAge)
    expect(human.myAge).toEqual(83.33);
  })

  test('should return age as 32.25', () => {
    let human = new Human(20);
    human.venusAge();
    expect(human.myAge).toEqual(32.26);
  })
});


describe ('roundToTwo', () => {

  test('should return num as 83.33', () => {
  let num = 83.33334;
  let num2 = +(Math.round(num + "e+2") + "e-2");
  // console.log(num2);
  expect(num2).toEqual(83.33)
})
});
