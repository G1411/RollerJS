import {Roller} from './Roller';

// describe("Smoke test", ()=> {
//   test("The test scaffold runs successfully.", ()=> {
//     expect(true).toBe(true);
//   });
// })

// describe("Roller tests", ()=> {
//   test("Description", () => {
//   });
// });



describe("Die", () => {
  test("Can be instantiated with default number of faces", () => {
    const die = new Roller(6);
    expect(die.faces).toBe(6);
  });

  test("Can be instantiated with a specified number of faces", () => {
    const die = new Roller(10);
    expect(die.faces).toBe(10);
  });

  test("Roll returns a valid value and updates the last roll and distribution", () => {
    const die = new Roller(6);
    const rollValue = die.roll(3);
    expect(rollValue).toBe(3);
    expect(die.last()).toBe(3);
    expect(die.distribution().get(3)).toBe(1);
  });

  test("Roll returns 0 and does not update the last roll or distribution if value is invalid", () => {
    const die = new Roller(6);
    const rollValue = die.roll(7);
    expect(rollValue).toBe(0);
    expect(die.last()).toBeUndefined();
    // expect(die.distribution().get(7)).toBeUndefined();
  });
});
