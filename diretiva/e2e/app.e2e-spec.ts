import { DiretivaPage } from './app.po';

describe('diretiva App', () => {
  let page: DiretivaPage;

  beforeEach(() => {
    page = new DiretivaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
