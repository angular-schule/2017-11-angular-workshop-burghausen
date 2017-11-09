import { browser, element, by, $ } from 'protractor';

export class ImprintPage {
  goTo() {
    browser.get('https://www.rtkreisen.de/Impressum__2.htm');
    return this;
  }
  getText(selector: string) {
    const text = $(selector);
    return text.getText();
  }
}

fdescribe('rtk website', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));
  let page: ImprintPage;
  beforeEach(() => page = new ImprintPage() );

  it('should show the correct year on imprint page', () => {
    const currentYear = new Date(). getFullYear();
    const freiText = page.goTo().getText('.freitext');
    expect(freiText).toContain(`© ${ currentYear } RT-Reisen GmbH`);
  });

  // TODO: .eupopup-head soll "Diese Webseite verwendet Cookies." enhalten

  afterAll(() => browser.waitForAngularEnabled(true));
});
