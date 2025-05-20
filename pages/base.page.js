import { Builder, By } from 'selenium-webdriver';

export class Base {


    constructor(driver) {
        this.browser = driver;
    }

    btnClickHere() {
        return this.browser.findElement(By.xpath('//a[contains(text(),"Click Here")]'));
    }

    async switchToIframes(driver, ...iframeSelectors) {
        for (const selector of iframeSelectors) {
            const iframe = await this.browser.findElement(By.xpath(selector));
            await this.browser.switchTo().frame(iframe);
        }
    }
}