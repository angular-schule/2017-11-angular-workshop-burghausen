import { AppPage } from './app.po';

describe('book-rating App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the text book rating', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Book Rating!');
  });
});
