import { GridLayoutsPage } from './app.po';

describe('grid-layouts App', () => {
  let page: GridLayoutsPage;

  beforeEach(() => {
    page = new GridLayoutsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
