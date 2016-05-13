export class BetfunPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('betfun-app h1')).getText();
  }
}
