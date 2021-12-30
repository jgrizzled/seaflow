import { fetchNewSales } from '../fetchNewSales';

// smoke test
test('should run', async () => {
  const sales = await fetchNewSales();
  expect(sales.length > 0);
});
