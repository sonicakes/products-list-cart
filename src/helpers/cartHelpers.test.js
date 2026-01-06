import { expect, test } from 'vitest';
import { calculateTotalItems } from './cartHelpers';

//pure logic unit test, no react ui

test('calculateTotalItems should sum up all quantities', () => {
  // Arrange
  const mockCart = [
    { name: 'Red Velvet Cupcake', qty: 2 },
    { name: 'Classic Cherry Pie', qty: 5 }
  ];

  // Act
  const result = calculateTotalItems(mockCart);

  // Assert
  expect(result).toBe(7);
});

test('calculateTotalItems should return 0 for an empty cart', () => {
  expect(calculateTotalItems([])).toBe(0);
});