import { Book } from './book';

describe('Rating a book', () => {

  let book: Book;
  beforeEach(() => book = new Book('', '', ''));

  it('should rate up by 1', () => {
    book.rateUp();
    expect(book.rating).toBe(2);
  });

  it('should down up by 1', () => {
    book.rating = 4;
    book.rateDown();
    expect(book.rating).toBe(3);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    book.rateUp();
    expect(book.rating).toBe(5);
  });

  it('should not be possible to have a rating smaller than 1', () => {
    book.rateDown();
    expect(book.rating).toBe(1);
  });
});
