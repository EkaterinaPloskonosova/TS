import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('add movie to cart', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Аватар', 'Avatar', 'USA', 'Its a new world', 'Adventures', 'James Cameron', '162 мин. / 02:42', 950);
  cart.add(movie);
  expect(cart.items.length).toBe(1)
});

test('sum calculation', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Аватар', 'Avatar', 'USA', 'Its a new world', 'Adventures', 'James Cameron', '162 мин. / 02:42', 950);
  cart.add(movie);
  expect(cart.sum()).toBe(950)
});

test('calculate discounted amount', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Аватар', 'Avatar', 'USA', 'Its a new world', 'Adventures', 'James Cameron', '162 мин. / 02:42', 950);
  cart.add(movie);
  expect(cart.discountSum(10)).toBe(855)
});

test('delete element', () => {
  const cart = new Cart();
  const movie1 = new Movie(1, 'Аватар', 'Avatar', 'USA', 'Its a new world', 'Adventures', 'James Cameron', '162 мин. / 02:42', 950);
  const movie2 = new Movie(2, 'Список Шиндлера', 'Schindlers Listic', 'USA', 'This list is life', 'drama', 'Steven Spielberg', '195 мин. /03:15', 1200)
  cart.add(movie1);
  cart.add(movie2);
  cart.deleteItem(1);
  expect(cart.items.length).toBe(1);
});