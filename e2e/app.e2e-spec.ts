import { YidahCVPage } from './app.po';

describe('yidah-cv App', () => {
  let page: YidahCVPage;

  beforeEach(() => {
    page = new YidahCVPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
