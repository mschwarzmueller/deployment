export class DeploymentPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('deployment-app h1')).getText();
  }
}
