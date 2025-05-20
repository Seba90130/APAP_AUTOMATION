import { buildDriver } from "../helpers/driver.js";
import * as allure from "allure-js-commons";
import { By } from 'selenium-webdriver';
import { ContentType } from "allure-js-commons";
import { Base } from "../pages/base.page.js";

describe("Prueba tecnica APAP", () => {
  let driver;
  let BasePage;

  beforeEach(async () => {
    driver = await buildDriver();
    BasePage = new Base(driver);
  });

  afterEach(async () => {
    driver.quit()
  });

  it("Imprima los diferentes textos de los iframes", async () => {

    await allure.step('Visitando web', async () => {
      await BasePage.browser.get('https://the-internet.herokuapp.com/nested_frames')
      await allure.attachment('Screenshot', Buffer.from(await driver.takeScreenshot(), 'base64'), ContentType.PNG);
    });
    await allure.step('Imprimiento Left', async () => {
      await BasePage.switchToIframes(driver, '//frameset//frame[@name="frame-top"]', '//frameset//frame[@name="frame-left"]')
      const textoLeft = await BasePage.browser.findElement(By.xpath('//body')).getText()
      await allure.attachment('PRINT', textoLeft, ContentType.TEXT);
      await BasePage.browser.switchTo().defaultContent();
    });
    await allure.step('Imprimiento Middle', async () => {

      await await BasePage.switchToIframes(driver, '//frameset//frame[@name="frame-top"]', '//frameset//frame[@name="frame-middle"]')
      const textoMiddle = await BasePage.browser.findElement(By.xpath('//body')).getText()
      await allure.attachment('PRINT', textoMiddle, ContentType.TEXT);
      await BasePage.browser.switchTo().defaultContent();
    });

    await allure.step('Imprimiento Right', async () => {

      await await BasePage.switchToIframes(driver, '//frameset//frame[@name="frame-top"]', '//frameset//frame[@name="frame-right"]')
      const textoRight = await driver.findElement(By.xpath('//body')).getText()
      await allure.attachment('PRINT', textoRight, ContentType.TEXT);
      await BasePage.browser.switchTo().defaultContent();
    });

    await allure.step('Imprimiento Bottom', async () => {

      await await BasePage.switchToIframes(driver, '//frameset//frame[@name="frame-bottom"]')
      const textoButtom = await BasePage.browser.findElement(By.xpath('//body')).getText()
      await allure.attachment('PRINT', textoButtom, ContentType.TEXT);
      await BasePage.browser.switchTo().defaultContent();
    });
  });

  it("Imprimir texto de nueva pestana", async () => {
    await allure.step('Visitando web', async () => {
      await BasePage.browser.get('https://the-internet.herokuapp.com/windows')
      await allure.attachment('Screenshot', Buffer.from(await driver.takeScreenshot(), 'base64'), ContentType.PNG);
    });
    await allure.step('Haciendo clic en "Click Here"', async () => {
      await (await BasePage.btnClickHere()).click();
      const originalWindow = await BasePage.browser.getWindowHandle();

      await BasePage.browser.wait(async () => (await BasePage.browser.getAllWindowHandles()).length === 2, 5000);
      const windows = await BasePage.browser.getAllWindowHandles();
      await BasePage.browser.close()
      for (const handle of windows) {
        if (handle !== originalWindow) {
          await BasePage.browser.switchTo().window(handle);
          break;
        }
      }
      await allure.attachment('Screenshot', Buffer.from(await driver.takeScreenshot(), 'base64'), ContentType.PNG);

      const h3 = await BasePage.browser.findElement(By.xpath('//h3')).getText()
      await allure.attachment('PRINT', h3, ContentType.TEXT);

    });
  });



})