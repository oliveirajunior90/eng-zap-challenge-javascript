import { byBrand } from '../../filters';
describe('byBrand filter', () => {
  it('should be Viva Real', () => {
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
    const res = byBrand('viva')(filter);
    expect(res).toBe(true);
  });

  it('should be Zap', () => {
    const filter = {
      address: {
        geoLocation: {
          location: {
            lon: -46.651234,
            lat: -23.555555,
          },
        },
      },
    };
    const res = byBrand('zap')(filter);
    expect(res).toBe(true);
  });
});
