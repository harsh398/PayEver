import { By, until, Key } from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        appBtn: By.xpath(`//*[@id="os-app-main"]/os-commerce-root/platform-header-component/pe-platform-header/pe-navbar/mat-toolbar/div[1]/button[2]/span/span`),
        appsMenu: By.xpath(`//*[@id="os-app-main"]/os-commerce-root/div[2]/span/business-layout/apps-layout/div/div/app-card/div/mat-card/div[1]/business-applications/div[7]/div[1]/div`),
        shopBtn: By.xpath(`//*[@id="os-app-main"]/os-commerce-root/div[2]/span/business-layout/apps-layout/div/div/app-card/div/mat-card/div[1]/business-applications/div[7]/div[1]/div`),
    };

    return {

        clickApp: function () {
            driver.wait(until.elementLocated(pageobjects.appBtn), 10000);
            return driver.findElement(pageobjects.appBtn).click();
        },
        clickShop: function () {
            driver.wait(until.elementLocated(pageobjects.appsMenu), 10000);
            return driver.findElement(pageobjects.shopBtn).click();
        },
    };
}