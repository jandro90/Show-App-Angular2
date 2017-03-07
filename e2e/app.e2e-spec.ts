import { TvmazexxxPage } from './app.po';

describe('tvmazexxx App', () => {
  let page: TvmazexxxPage;

  beforeEach(() => {
    page = new TvmazexxxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
