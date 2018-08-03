/**
 * @jest-environment node
 */

test('undefined', () => {
  const n = undefined
  expect(n).not.toBeNull()
  expect(n).toBeUndefined()
  expect(n).not.toBeDefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).not.toBeUndefined()
  expect(n).toBeDefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('false', () => {
  const n = false
  expect(n).not.toBeNull()
  expect(n).not.toBeUndefined()
  expect(n).toBeDefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})
