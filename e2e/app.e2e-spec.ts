import { TesteAngularCliPage } from './app.po';

describe('teste-angular-cli App', function() {
  let page: TesteAngularCliPage;

  beforeEach(() => {
    page = new TesteAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
