import { LjcpPage } from './app.po';

describe('ljcp App', () => {
  let page: LjcpPage;

  beforeEach(() => {
    page = new LjcpPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
