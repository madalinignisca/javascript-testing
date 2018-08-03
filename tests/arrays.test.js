/**
 * @jest-environment node
 */

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
]

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer')
  expect(shoppingList).not.toContain('bags')
})
