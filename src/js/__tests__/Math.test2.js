import MathCharacter from '../app';

test('check the effect on the strength of the damage', () => {
    const mathCh = new MathCharacter();
    mathCh.distance = 2;
    mathCh.attack = 100;
    mathCh.stoned = false;
    mathCh.getAttack();
    expect(mathCh.attack).toBe(90);
  });
  