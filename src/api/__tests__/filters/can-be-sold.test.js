import { canBeSold } from '../../filters';

describe('can be sold filter', () => {
  describe('ZAP', () => {
    it('can be sold if products is product is greater than 600000', () => {
      const filter = {
        usableAreas: 10,
        pricingInfos: {
          price: 550000,
        },
      };

      expect(canBeSold('zap', 'SALE')(filter)).toBe(false);
    });

    it('should not allow products without usable area', () => {
      const filter = {
        usableAreas: 0,
        pricingInfos: {
          price: 800000,
        },
      };
      expect(canBeSold('zap', 'SALE')(filter)).toBe(false);
    });

    it('should not allow products such a square meter value is smaller than 3500', () => {
      const filter = {
        usableAreas: 250,
        pricingInfos: {
          price: 700000,
        },
      };

      expect(canBeSold('zap', 'SALE')(filter)).toBe(false);
    });
  });

  describe('VIVA', () => {
    it('can be sold if products is smaller than 700000', () => {
      const filter = {
        usableAreas: 10,
        pricingInfos: {
          price: 800000,
        },
      };

      expect(canBeSold('viva', 'SALE')(filter)).toBe(false);
    });

    it('should not allow for viva products without usable area', () => {
      const filter = {
        usableAreas: 0,
        pricingInfos: {
          price: 400000,
        },
      };
      expect(canBeSold('viva', 'SALE')(filter)).toBe(false);
    });
  });
});
