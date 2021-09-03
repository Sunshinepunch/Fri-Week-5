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
});

