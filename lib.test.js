import {add} from '/lib';
import { expect, test } from 'vitest'
test('La somme 1 + 2 égale à 3', () => {
    expect(add(1, 2)).toBe(3)
  })