import { browser, element, by, $ } from 'protractor';

// at the top of the test spec:
const fs = require('fs');

export class ImprintPage {
  goTo() {
    browser.get('https://www.rtkreisen.de/Impressum__2.htm');
    return this;
  }
  getText(selector: string) {
    const text = $(selector);
    return text.getText();
  }

  takeScreenhot(filename) {
    browser.takeScreenshot().then((png) => {
      this.writeScreenShot(png, filename);
    });
  }

  // abstract writing screen shot to a file
  private writeScreenShot(data, filename) {
    const stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }
}

fdescribe('rtk website', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));
  let page: ImprintPage;
  beforeEach(() => page = new ImprintPage());

  it('should show the correct year on imprint page', () => {
    const currentYear = new Date().getFullYear();
    const freiText = page.goTo().getText('.freitext');
    expect(freiText).toContain(`© ${currentYear} RT-Reisen GmbH`);
  });

  it('should show the cookie popup', () => {
    const text = page.goTo().getText('.eupopup-head');
    expect(text).toContain(`Diese Webseite verwendet Cookies.`);

    page.takeScreenhot('/screenshot.png');
  });


  afterAll(() => browser.waitForAngularEnabled(true));
});
