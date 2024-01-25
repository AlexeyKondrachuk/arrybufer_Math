import Daemon from '../daemon';

test('damage strength', () => {
  const demon = new Daemon();
  demon.attack = 100;
  demon.distance = 3;
  demon.stoned = true;
  demon.getAttack();
  expect(demon.attack).toBe(72);
});