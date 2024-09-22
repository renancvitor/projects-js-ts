describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();
    expect(null).not.toBeTruthy();

    expect(number).toBeGreaterThan(9);
  });

  it('should split tests', () => {
    const number = 10;

    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();

    expect(number).toBeGreaterThan(9);
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Renan', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
  });
});
