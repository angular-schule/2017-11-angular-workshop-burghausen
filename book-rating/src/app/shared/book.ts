export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public description: string,
    public rating = 1
  ) { }

  // factory!
  static empty(): Book {
    return new Book('', '', '');
  }

  rateUp() {
    if (this.rateUpAllowed()) {
      this.rating++;
    }
  }

  rateDown() {
    if (this.rateDownAllowed()) {
      this.rating--;
    }
  }

  rateUpAllowed() {
    return this.rating < 5;
  }

  rateDownAllowed() {
    return this.rating > 1;
  }
}
