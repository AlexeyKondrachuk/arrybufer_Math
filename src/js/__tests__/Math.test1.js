import MathCharacter from '../app';

test('check the distance for equality 0', () => {
  const mathCh = new MathCharacter();
  mathCh.distance = 0;
  mathCh.attack = 100;
  mathCh.getAttack();
  expect(mathCh.attack).toBe(100);
});