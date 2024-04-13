
import { test, expect,} from 'vitest';
import { trier } from '../src/ex2-sorting';

test('Tri d\'un tableau déjà trié', () => {
    const result = trier([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
 
test('Tri d\'un tableau inversé', () => {
    const result = trier([5, 4, 3, 2, 1]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  
test('Tri d\'un tableau non trié', () => {
    const result = trier([3, 1, 4, 5, 2]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  

test('Tri d\'un tableau avec des éléments non numériques', () => {
    const result = trier([3, 'a', 4, 'b', 2]);
    expect(result).toEqual([2, 3, 4,]);
  });
  
test('Tri d\'un tableau vide', () => {
    const result = trier([]);
    expect(result).toEqual([]);
  });
