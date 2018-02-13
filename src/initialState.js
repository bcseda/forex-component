const currencyNames = ['GPB', 'EUR', 'USD', 'CHF', 'JPY', 'CAD', 'CNY'];

const [ GPB, EUR, USD, CHF, JPY, CAD, CNY ] = currencyNames;

const currencies = [
  {
    name: GPB,
    order: 1,
    weakerCurrencies: [
      { id: USD, position: 0 },
      { id: EUR, position: 1 },
      { id: CHF, position: 1 },
      { id: JPY, position: 1 },
      { id: CAD, position: 2 },
      { id: CNY, position: 6 },
    ],
  },
  {
    name: EUR,
    order: 2,
    weakerCurrencies: [
      { id: USD, position: 0 },
      { id: CHF, position: 0 },
      { id: JPY, position: 1 },
      { id: CAD, position: 1 },
      { id: CNY, position: 5 },
    ],
  },
  {
    name: USD,
    order: 3,
    weakerCurrencies: [
      { id: CHF, position: 0 },
      { id: JPY, position: 1 },
      { id: CAD, position: 1 },
      { id: CNY, position: 5 },
    ],
  },
  {
    name: CHF,
    order: 4,
    weakerCurrencies: [
      { id: JPY, position: 1 },
      { id: CAD, position: 1 },
      { id: CNY, position: 5 },
    ],
  },
  {
    name: JPY,
    order: 5,
    weakerCurrencies: [
      { id: CAD, position: 1 },
      { id: CNY, position: 4 },
    ],
  },
  {
    name: CAD,
    order: 6,
    weakerCurrencies: [
      { id: CNY, position: 3 },
    ],
  },
  {
    name: CNY,
    order: 7,
    weakerCurrencies: [],
  },
];

const certificates = currencyNames.map(x => ({name: x, count: 8}));

const initialState = {
  currencies,
  certificates,
};

export default initialState;
