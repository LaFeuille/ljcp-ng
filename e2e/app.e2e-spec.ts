import { LjcpPage } from './app.po';

describe('ljcp App', () => {
  let page: LjcpPage;

  beforeEach(() => {
    page = new LjcpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
