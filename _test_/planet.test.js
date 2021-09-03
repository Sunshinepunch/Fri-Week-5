import Human from '../src/planet.js';



describe ('Human', () => {

  test('should instantiate class Human', () => {
    class Human {
      constructor() {
        this.myAge= myAge
      }
    }
    let human = new Human();
    expect(human).toBeDefined();
  })

  test('should return age as 20', () => {
    const human = new Human(20);
    expect(human.myAge).toEqual(20);
  })
})

