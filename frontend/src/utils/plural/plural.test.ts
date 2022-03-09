import { plural } from './plural';

test('Expect correct plural output with 2 months', () => {
  expect(plural(2, 'month')).toEqual('2 months');
});

test('Expect correct plural output with 1 month', () => {
  expect(plural(1, 'month')).toEqual('1 month');
});
