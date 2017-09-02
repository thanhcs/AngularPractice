import { browser, by, element } from 'protractor';

export class AngularDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('framework-root h1')).getText();
  }
}
