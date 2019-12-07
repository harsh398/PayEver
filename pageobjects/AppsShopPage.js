import {
    By,
    until,
    Key
} from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        appBtn: By.xpath(`//*[@id="os-app-main"]/os-commerce-root/platform-header-component/pe-platform-header/pe-navbar/mat-toolbar/div[1]/button[2]/span/span`),
        appsMenu: By.xpath(`/html[1]/body[1]/os-commerce[1]/os-commerce-root[1]/div[2]/span[1]/business-layout[1]/apps-layout[1]/div[1]/div[1]/app-card[1]/div[1]/mat-card[1]/div[1]/business-applications[1]/div[7]`),
        shopBtn: By.xpath(`/html[1]/body[1]/os-commerce[1]/os-commerce-root[1]/div[2]/span[1]/business-layout[1]/apps-layout[1]/div[1]/div[1]/app-card[1]/div[1]/mat-card[1]/div[1]/business-applications[1]/div[7]`),
    };

    return {

        clickApp: async function () {
            await driver.wait(until.elementLocated(pageobjects.appBtn), 10000);
            return await driver.findElement(pageobjects.appBtn).click();
        },
        clickShop: async function () {
            await driver.wait(until.elementLocated(pageobjects.appsMenu), 10000);
            return await driver.findElement(pageobjects.shopBtn).click();
        },
    };
}