import { test,expect } from 'vitest';
import { fetchRandomUser } from '../src/ex4-async';

test('Test de fetchRandomUser', async () => {
  // Attendre le resultat de la promesse retournée
  // par fetchRandomUser
  const userData = await fetchRandomUser();

  // Vérifier que les données renvoyées sont bien un 
  //objet JSON
  expect(typeof userData).toBe('object');
  // Vérifier que l'objet contient les clés attendues
  expect(userData).toHaveProperty('gender');
  expect(userData).toHaveProperty('name');
  expect(userData).toHaveProperty('location');
  expect(userData).toHaveProperty('email');
 
});



 
