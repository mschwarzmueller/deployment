import { DeploymentPage } from './app.po';

describe('deployment App', function() {
  let page: DeploymentPage;

  beforeEach(() => {
    page = new DeploymentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('deployment works!');
  });
});
