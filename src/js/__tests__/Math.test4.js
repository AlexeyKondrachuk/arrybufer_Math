import MathCharacter from '../app';

test('set attack value', () => {
    const mathChar = new MathCharacter();
    mathChar.setAttack(75);
    expect(mathChar.attack).toBe(75);
  });