import Login from '../pageobjects/LoginPage';
import AppShop from '../pageobjects/AppsShopPage';
import ThemeText from '../pageobjects/ThemeTextPage';
const { Builder, By, Key, until } = require('selenium-webdriver');
import { assert } from 'chai';
import { argv } from 'yargs';
import getDriver from '../driverutil/driverutil';
{
    describe, before, after, it
}
import "selenium-webdriver/testing";

describe('Payever Test Demo', function () {
    let driver;
    this.timeout(50000);
    this.beforeEach('Browser initializaton', async function () {
        driver = getDriver(argv.browser)
        driver.manage().window().maximize();
        this.timeout(50000);
        await driver.get("https://commerceos.staging.devpayever.com/entry/login");
        
    });

    it('User can Login and perform Actions ', async function () {
//login too slow
        let LoginPage = new Login(driver);
        let AppShopPage = new AppShop(driver);
        let ThemeTextPage = new ThemeText(driver);
        //1. Add Credenials 
        await driver.wait(until.elementLocated(By.name(`UserName`)), 50000);
        await LoginPage.typeUserName('aqa@payever.org');
        await LoginPage.typePass('Aqacool123!');
        //2. Click on Login Button
        await LoginPage.loginBtn();
        //3. Business DashBoard will get Loaded 
        const dashboardLoaded = await driver.wait(until.elementLocated(By.xpath(`//*[@id="os-app-main"]/os-commerce-root/div[2]/span/business-dashboard-layout/base-dashboard/div/div/div/widgets-layout`)), 30000);
        await driver.executeScript('return document.URL').then(function (return_value) {
            assert.equal(return_value, 'https://commerceos.staging.devpayever.com/business/2c965cbc-df55-4785-b820-cd803486f8d7/info/overview')
        });
        //4. Clicked on Apps 
        await AppShopPage.appBtn();
        await driver.executeScript('return document.URL').then(function (return_value) {
            assert.equal(return_value, 'https://commerceos.staging.devpayever.com/business/2c965cbc-df55-4785-b820-cd803486f8d7/info/apps')
        });
        //5. Clicked on Shop
        await AppShopPage.shopBtn();
        await driver.wait(until.elementLocated(By.xpath(`//*[@id="os-app-main"]/os-commerce-root/platform-header-component/pe-platform-header/pe-navbar/mat-toolbar/div[1]/button[3]/span/span`)), 30000);

        await driver.executeScript('return document.URL').then(function (return_value) {
            assert.equal(return_value, 'https://commerceos.staging.devpayever.com/business/2c965cbc-df55-4785-b820-cd803486f8d7/builder/shop/6c082a7a-5446-4f25-a3bd-9d080cf54921/builder/editor/home?themeType=application&theme=6c082a7a-5446-4f25-a3bd-9d080cf54921&channelSet=a644f50e-b992-433a-950e-c66dc247c80e&backUrl=&getBusinessThemeByAppTheme=true&')
        });
        //6. Clicked on Themes
        await ThemeTextPage.themeBtn();
        //7. Click on Add Theme
        await ThemeTextPage.addTheme();
        //8. Click on Text Widget
        await ThemeTextPage.clickText();
        // Shadow Dom Element 
        async function getShadowRoot() {
            let shadowHost;
            await (shadowHost = driver.findElement(By.css(`.pe-editor-canvas`)));
            return driver.executeScript("return arguments[0].shadowRoot", shadowHost);
        }
        async function findShadowDomElement(shadowDomElement) {
            let shadowRoot;
            let element;
            await (shadowRoot = getShadowRoot());
            await shadowRoot.then(async (result) => {
                await (element = result.findElement(By.css(shadowDomElement)).click());
            });

            return element;
        };
        await findShadowDomElement(`.pe-editor-canvas__container pe-editor-element-anchors svg`);
        await driver.wait(until.elementLocated(By.xpath(`//*[@id="content"]/div[2]/pe-editor-text-decorator/pe-text-editor/div/span`)), 30000);
        await driver.findElement(By.xpath(`//*[@id="content"]/div[2]/pe-editor-text-decorator/pe-text-editor/div/span`)).sendKeys('This test is completed!');
        await driver.findElement(By.xpath(`//*[@id="os-app-main"]/os-commerce-root/platform-header-component/pe-platform-header/pe-navbar/mat-toolbar/div[3]/button`)).click();
    });

    // afterEach(async function () {
    //     await driver.quit();
    // });
});
