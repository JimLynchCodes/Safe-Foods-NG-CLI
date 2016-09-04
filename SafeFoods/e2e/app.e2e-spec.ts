import { SafeFoodsPage } from './app.po';

describe('safe-foods App', function() {
  let page: SafeFoodsPage;

  beforeEach(() => {
    page = new SafeFoodsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
