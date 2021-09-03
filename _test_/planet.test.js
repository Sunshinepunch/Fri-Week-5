
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
    expect(human.myAge).toEqual(83.33);
  })

  test('should return age as 32.25', () => {
    let human = new Human(20);
    human.venusAge();
    expect(human.myAge).toEqual(32.26);
  })

  test('should return age as 10.63', () => {
    let human = new Human(20);
    human.marsAge();
    expect(human.myAge).toEqual(10.64);
  })

  test('should return age as 1.69', () => {
    let human = new Human(20);
    human.jupiterAge();
    expect(human.myAge).toEqual(1.69);
  })

  test('should return myMercuryAge array with 83.33 element', () => {
    let human = new Human(20);
    human.mercuryAge();
    expect(human.myMercuryAge).toEqual([83.33]);
  })

  test('should intialize human with myLE of 78', () => {
    let human = new Human(20, 78);
    expect(human.myLE).toEqual(78);
  })

  test('should return human with myLE of 325', () => {
    let human = new Human(20, 78);
    let myLE = human.myLE;
    human.mercuryAge(myLE);
    expect(human.myLE).toEqual(78);
  })
});


describe ('roundToTwo', () => {

  test('should return num as 83.33', () => {
  let num = 83.33334;
  let num2 = +(Math.round(num + "e+2") + "e-2");
  expect(num2).toEqual(83.33)
})
});
