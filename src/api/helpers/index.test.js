import { formatData } from '.';
describe('Helpers', () => {
  it('formatData', () => {
    const mock = {
      usableAreas: 45,
      listingType: 'USED',
      createdAt: '2018-03-26T14:26:20.327Z',
      listingStatus: 'ACTIVE',
      id: '548289d0d1df',
      parkingSpaces: 1,
      updatedAt: '2018-03-26T14:26:20.327Z',
      owner: false,
      images: [
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
      ],
      address: {
        city: 'São Paulo',
        neighborhood: 'Jardim Íris',
        geoLocation: {
          precision: 'ROOFTOP',
          location: {
            lon: -46.723175,
            lat: -23.501005,
          },
        },
      },
      bathrooms: 1,
      bedrooms: 2,
      pricingInfos: {
        period: 'MONTHLY',
        yearlyIptu: '0',
        price: '1200',
        rentalTotalPrice: '1460',
        businessType: 'RENTAL',
        monthlyCondoFee: '260',
      },
    };

    const expected = {
      id: '548289d0d1df',
      city: 'São Paulo',
      location: { lon: -46.723175, lat: -23.501005 },
      neighborhood: 'Jardim Íris',
      price: 1200,
      netPrice: 1320,
      monthlyCondoFee: 260,
      rentalTotalPrice: 1460,
      netRentalPrice: 1460,
      type: 'aluguel',
      gallery: [
        'https://oliveirajunior90.000webhostapp.com/olx/pic9.jpg',
        'https://oliveirajunior90.000webhostapp.com/olx/pic11.jpg',
        'https://oliveirajunior90.000webhostapp.com/olx/pic2.jpg',
        'https://oliveirajunior90.000webhostapp.com/olx/pic18.jpg',
        'https://oliveirajunior90.000webhostapp.com/olx/pic19.jpg',
      ],
      bathrooms: 1,
      bedrooms: 2,
      parkingSpaces: 1,
      usableAreas: 45,
    };

    const data = formatData('zap')(mock);
    expect(JSON.stringify(data)).toMatch(JSON.stringify(expected));
  });

  it('rental price 50% more when viva real', () => {
    const mock = {
      address: {
        city: 'São Paulo',
        neighborhood: 'Jardim Íris',
        geoLocation: {
          precision: 'ROOFTOP',
          location: {
            lon: -46.723175,
            lat: -23.501005,
          },
        },
      },
      images: [
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
      ],
      pricingInfos: {
        period: 'MONTHLY',
        yearlyIptu: '0',
        price: '1200',
        rentalTotalPrice: '1460',
        businessType: 'RENTAL',
        monthlyCondoFee: '260',
      },
    };
    const data = formatData('viva')(mock);
    expect(data).toMatchObject({ netRentalPrice: 2190 });
  });

  it('price discount 10% when zap', () => {
    const mock = {
      address: {
        city: 'São Paulo',
        neighborhood: 'Jardim Íris',
        geoLocation: {
          precision: 'ROOFTOP',
          location: {
            lon: -46.723175,
            lat: -23.501005,
          },
        },
      },
      images: [
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
      ],
      pricingInfos: {
        period: 'MONTHLY',
        yearlyIptu: '0',
        price: '1200',
        rentalTotalPrice: '1460',
        businessType: 'RENTAL',
        monthlyCondoFee: '260',
      },
    };
    const data = formatData('zap')(mock);
    expect(data).toMatchObject({ netPrice: 1320 });
  });
});
