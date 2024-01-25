import MathCharacter from '../app';

test('return the players influence calue', () => {
    const mathChar = new MathCharacter();
    mathChar.setStoned(false);
    expect(mathChar.getStoned()).toBe(false);
  });