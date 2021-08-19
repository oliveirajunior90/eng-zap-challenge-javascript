import { canBeRented } from 'api/filters';

describe('can be rented', () => {
  describe('ZAP', () => {
    it('can be rented by zap if total price is greater than 3500,00 ', () => {
      const filter = {
        pricingInfos: {
          rentalTotalPrice: 2000,
        },
      };

      expect(canBeRented('zap', 'RENTAL')(filter)).toBe(false);
    });
  });

  describe('VIVA', () => {
    it('can be rented by viva real if total price is smaller than 4000,00', () => {
      const filter = {
        pricingInfos: {
          rentalTotalprice: 6500000,
        },
      };

      expect(canBeRented('viva', 'RENTAL')(filter)).toBe(false);
    });

    it('can not be rented when monthly condo fee is 30% greather or equal rent price', () => {
      const filter = {
        usableAreas: 30,
        rentalTotalprice: 2500,
        monthlyCondoFee: 3500,
      };

      expect(canBeRented('viva', 'RENTAL')(filter)).toBe(false);
    });
  });
});
