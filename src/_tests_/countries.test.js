import countries from '../redux/countries/countries';

describe('countries reducer', () => {
  it('should return the initial state', () => {
    expect(countries(undefined, {})).toEqual([]);
  });
});
