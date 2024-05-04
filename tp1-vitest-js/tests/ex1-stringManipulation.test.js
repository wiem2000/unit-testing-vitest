
import { test, expect, } from 'vitest';
import { transformer } from '../src/ex1-stringManipulation';

     
     //it and test: Both it and test keywords are used to define individual tests

  test('Transforme une chaîne vide', () => {
    const result = transformer('');
    expect(result).toBe('');
    //  toBe pour vérifier si le résultat est une chaîne vide
  });

 
  test('Transforme une chaîne en minuscules en majuscules', () => {
    const result = transformer('hello');
    expect(result).toEqual('HELLO'); 
    //toEqual pour vérifier si le résultat est égal à 'HELLO'
  });

  
  test('Transforme une chaîne avec des caractères spéciaux en majuscules', () => {
    const result = transformer('Hello,@ world!');
    expect(result).toMatch('HELLO,@ WORLD!'); 
    // toMatch pour vérifier si le résultat correspond à 'HELLO,@ WORLD!'
  });

    
