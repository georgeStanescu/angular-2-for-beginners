import { Ng2BeginnerCliPage } from './app.po';

describe('ng-2-beginner-cli App', function() {
  let page: Ng2BeginnerCliPage;

  beforeEach(() => {
    page = new Ng2BeginnerCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
