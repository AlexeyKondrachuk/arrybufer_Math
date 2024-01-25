import MathCharacter from '../app';

test('establish player influence', () => {
    const mathChar = new MathCharacter();
    mathChar.setStoned(true);
    expect(mathChar.stoned).toBe(true);
  });