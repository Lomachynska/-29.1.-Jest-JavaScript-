const weekFn = require('../weekFn');

describe('weekFn function', () => {
  test('should return Понеділок for 1', () => {
    expect(weekFn(1)).toBe('Понеділок');
  });

  test('should return Вівторок for 2', () => {
    expect(weekFn(2)).toBe('Вівторок');
  });

  test('should return Середа for 3', () => {
    expect(weekFn(3)).toBe('Середа');
  });

  test('should return Четвер for 4', () => {
    expect(weekFn(4)).toBe('Четвер');
  });

  test('should return П\'ятниця for 5', () => {
    expect(weekFn(5)).toBe('П\'ятниця');
  });

  test('should return Субота for 6', () => {
    expect(weekFn(6)).toBe('Субота');
  });

  test('should return Неділя for 7', () => {
    expect(weekFn(7)).toBe('Неділя');
  });

  test('should return null for values greater than 7', () => {
    expect(weekFn(9)).toBeNull();
  });

  test('should return null for non-integer values', () => {
    expect(weekFn(1.5)).toBeNull();
    expect(weekFn('2')).toBeNull();
  });

  test('should return null for non-numeric values', () => {
    expect(weekFn('abc')).toBeNull();
  });
});
