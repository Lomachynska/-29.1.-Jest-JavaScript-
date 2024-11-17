const { ageClassification, weekFn} = require('./ageClassification.js');

describe('Testing the ageClassification function for various are ranges',() => {

  test('age -1 returns null', () => {
    expect(ageClassification(-1)).toBeNull();
  });
  
  test('age 0 returns null', () => {
    expect(ageClassification(0)).toBeNull();
  });
  
  test('age 1 returns "Дитинство"', () => {
    expect(ageClassification(1)).toBe('Дитинство');
  });
  
  test('age 24 returns "Дитинство"', () => {
    expect(ageClassification(24)).toBe('Дитинство');
  });
  
  test('age 24.01 returns "Молодість"', () => {
    expect(ageClassification(24.01)).toBe('Молодість');
  });
  
  test('age 44 returns "Молодість"', () => {
    expect(ageClassification(44)).toBe('Молодість');
  });
  
  test('age 44.01 returns "Зрілість"', () => {
    expect(ageClassification(44.01)).toBe('Зрілість');
  });
  
  test('age 65 returns "Зрілість"', () => {
    expect(ageClassification(65)).toBe('Зрілість');
  });
  
  test('age 65.1 returns "Старість"', () => {
    expect(ageClassification(65.1)).toBe('Старість');
  });
  
  test('age 75 returns "Старість"', () => {
    expect(ageClassification(75)).toBe('Старість');
  });
  
  test('age 75.01 returns "Довголіття"', () => {
    expect(ageClassification(75.01)).toBe('Довголіття');
  });
  
  test('age 90 returns "Довголіття"', () => {
    expect(ageClassification(90)).toBe('Довголіття');
  });
  
  test('age 90.01 returns "Рекорд"', () => {
    expect(ageClassification(90.01)).toBe('Рекорд');
  });
  
  test('age 122 returns "Рекорд"', () => {
    expect(ageClassification(122)).toBe('Рекорд');
  });
  
  test('age 122.01 returns null', () => {
    expect(ageClassification(122.01)).toBeNull();
  });
  
  test('age 150 returns null', () => {
    expect(ageClassification(150)).toBeNull();
  });
  
})


