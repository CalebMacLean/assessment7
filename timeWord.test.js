const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('it returns a string', () => {
    expect(typeof timeWord('00:00')).toBe('string');
  });

  test('it returns the correct time word', () => {
    expect(timeWord('00:00')).toBe('midnight');
    expect(timeWord('12:00')).toBe('noon');
    console.log('01:00', timeWord('01:00'));
    expect(timeWord('01:00')).toBe('one o\'clock am');
    expect(timeWord('15:06')).toBe('three oh six pm');
    expect(timeWord('10:34')).toBe('ten thirty four am');
  });

  test('it fails with invalid input', () => {
    expect(timeWord('25:00')).toBe('Invalid entry in the hours place');
    expect(timeWord('00:60')).toBe('Invalid entry in the minutes place');
    expect(timeWord('00:0')).toBe('Invalid entry. Please enter a string in the format hh:mm');
    expect(timeWord(12)).toBe('Invalid entry. Please enter a string');
  });
});