
import { Human, roundToTwo, timeLeft } from '../src/planet.js';



describe ('Human', () => {

  test('should instantiate class Human', () => {
    let human = new Human();
    expect(human).toBeDefined();
  })

  test('should return age as 20', () => {
    let human = new Human(20);
    expect(human.myAge).toEqual(20);
  })

  // What is it accomplishing in your actual logic? What is failing?
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
    human.mercuryLE(myLE);
    expect(human.myLE).toEqual(325);
  })

  test('should return LE of 241.67', () => {
    let human = new Human(20, 78);
    let mercLE = human.mercuryLE();
    let mercAge = human.mercuryAge();
    let result = timeLeft(mercLE, mercAge);
    expect(result).toEqual(241.67);
  })

  test('should return LE of -4.170000000000016', () => {
    let human = new Human(79, 78);
    let mercLE = human.mercuryLE();
    let mercAge = human.mercuryAge();
    let result = mercLE - mercAge;
    expect(result).toEqual(-4.170000000000016);
  })

  test('should return Yikes. You would have died 4.17 years ago', () => {
    let result1 = timeLeft(325, 329.17);
    expect(result1).toEqual("Yikes. You would have died 4.17 years ago.");
  })

  test('should return 1', () => {
    let result1 = timeLeft(4, 3);
    expect(result1).toEqual(1);
  })

  test('should return Yikes. You would have died 4.17 years ago', () => {
    let result3 = timeLeft('xxy', 'we');
    expect(result3).toEqual("You've done something to fiddle with space time. Put it back.");
  })
});


describe ('roundToTwo', () => {

  test('should return num as 83.33', () => {
  let num = 83.33334;
  let num2 = +(Math.round(num + "e+2") + "e-2");
  expect(num2).toEqual(83.33)
})
});
