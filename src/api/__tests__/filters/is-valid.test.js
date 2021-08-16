import { isValid } from '../../filters';

describe('isValid filter', () => {
  it('should return true when a valid field is passed', () => {
    const filter = {
      address: {
        geoLocation: {
          location: {
            lon: -46.716542,
            lat: -23.502555,
          },
        },
      },
    };

    expect(isValid(filter)).toBe(true);
  });

  it('should return false when a invalid field is passed', () => {
    const filter = {
      address: {
        geoLocation: {
          location: {
            lon: 0,
            lat: -23.502555,
          },
        },
      },
    };

    expect(isValid(filter)).toBe(false);
  });
});
