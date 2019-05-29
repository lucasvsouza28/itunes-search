import { ItunesSearchPage } from './app.po';

describe('itunes-search App', () => {
  let page: ItunesSearchPage;

  beforeEach(() => {
    page = new ItunesSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
