import { byBrand, isValid, canBeSold, canBeRented } from './index';

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

describe('can be sold', () => {
  it('should verify if product can be sold', () => {
    const filterViva = {
      usableAreas: 10,
      pricingInfos: {
        price: 6500000,
      },
    };

    expect(canBeSold('viva', 'SALE')(filterViva)).toBe(true);
  });

  it('should verify if product can be sold when business type is not sale', () => {
    const filterViva = {
      usableAreas: 10,
      pricingInfos: {
        price: 6500000,
      },
    };

    expect(canBeSold('viva', 'RENTAL')(filterViva)).toBe(false);
  });
});

describe('can be rented', () => {
  it('should verify if product can be rented', () => {
    const filterViva = {
      pricingInfos: {
        rentalTotalPrice: 8000,
      },
    };

    expect(canBeRented('viva', 'RENTAL')(filterViva)).toBe(true);
  });

  it('should verify if product can be sold when business type is not rental', () => {
    const filterViva = {
      pricingInfos: {
        price: 6500000,
      },
    };

    expect(canBeRented('viva', 'RENTAL')(filterViva)).toBe(false);
  });
});
