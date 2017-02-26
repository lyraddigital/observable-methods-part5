import { ObservableMethodsPart5Page } from './app.po';

describe('observable-methods-part5 App', function() {
  let page: ObservableMethodsPart5Page;

  beforeEach(() => {
    page = new ObservableMethodsPart5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
