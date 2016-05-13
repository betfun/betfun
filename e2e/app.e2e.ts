import { BetfunPage } from './app.po';

describe('betfun App', function() {
  let page: BetfunPage;

  beforeEach(() => {
    page = new BetfunPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('betfun works!');
  });
});
