import { LjcpPage } from './app.po';

describe('ljcp App', function() {
  let page: LjcpPage;

  beforeEach(() => {
    page = new LjcpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
