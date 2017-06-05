import { browser, by, element } from 'protractor';

export class AngularDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ideatank-root h1')).getText();
  }
}
