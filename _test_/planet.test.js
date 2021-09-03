









describe ('Human', () => {

  test('should instantiate class Human', () => {
    class Human {
      constructor() {
        this.myAge
      }
    }
    let human = new Human();
    expect(human).toBeDefined();
  })
})