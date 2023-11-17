
const calculateBonus = require('./HW2.4.4')
test('Sum is more than 50', () => {
    expect(calculateBonus(100, 200)).toBe(50);
  }
)

test('Sum is less then 50', () => {
    expect(calculateBonus(10, 20)).toBe(30);
  }
)

test('Sum is 50', () => {
    expect(calculateBonus(10, 40)).toBe(50);
  }
)

it('should return a number', () => {
  let a = 8
  let b = 7
  const sum = a+b
  expect(typeof sum).toBe('number')

  }
)
