import { isPriceInRange } from '../src/ex3-priceboundary';
import { test, expect,} from 'vitest';

test('Prix égal à la limite inférieure', () => {
  expect(isPriceInRange(100, 100, 200)).toBe(true);
});

test('Prix égal à la limite supérieure', () => {
  expect(isPriceInRange(200, 100, 200)).toBe(true);
});

test('Prix en dessous de la limite inférieure', () => {
  expect(isPriceInRange(99, 100, 200)).toBe(false);
});

test('Prix au-dessus de la limite supérieure', () => {
  expect(isPriceInRange(201, 100, 200)).toBe(false);
});

test('Prix égal à la limite inférieure avec plage inversée', () => {
  expect(isPriceInRange(200, 200, 100)).toBe(true);
});

test('Prix égal à la limite supérieure avec plage inversée', () => {
  expect(isPriceInRange(100, 200, 100)).toBe(true);
});
