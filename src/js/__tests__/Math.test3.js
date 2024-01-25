import MathCharacter from '../app';

test('attack level should be >= 0', () => {
    const mathCh = new MathCharacter();
    mathCh.attack = 3;
    mathCh.distance = 3;
    mathCh.stoned = true;
    mathCh.getAttack();
    expect(mathCh.attack).toBe(0);
  });