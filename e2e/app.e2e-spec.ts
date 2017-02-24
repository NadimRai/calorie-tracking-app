import { CalorieTrackingAppPage } from './app.po';

describe('calorie-tracking-app App', function() {
  let page: CalorieTrackingAppPage;

  beforeEach(() => {
    page = new CalorieTrackingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
