import {
    By,
    until,
    Key
} from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        themesBtn: By.xpath(`//*[@id="os-app-main"]/os-commerce-root/platform-header-component/pe-platform-header/pe-navbar/mat-toolbar/div[1]/button[3]/span/span`),
    };

    return {
        themeBtn: async function () {
            await driver.wait(until.elementLocated(pageobjects.themesBtn), 10000);
            return await driver.findElement(pageobjects.themesBtn).click();
        },
        addTheme: async function () {
            await driver.wait(until.elementLocated(By.xpath(`//*[@id="os-app-main"]/os-commerce-root/div[2]/div/app-builder/pe-builder-themes-list/div[2]/pe-builder-themes-list-user/div/pe-builder-theme-plus/mat-card`)), 30000);
            return await driver.findElement(By.xpath(`//*[@id="os-app-main"]/os-commerce-root/div[2]/div/app-builder/pe-builder-themes-list/div[2]/pe-builder-themes-list-user/div/pe-builder-theme-plus/mat-card`)).click();

        },
        addText: async function () {
            await driver.wait(until.elementLocated(By.xpath(`//*[@id="menus"]/pe-builder-navbar-top/mat-toolbar/mat-toolbar-row/pe-builder-navbar-top-button[4]/button`)), 30000);
            return await driver.findElement(By.xpath(`//*[@id="menus"]/pe-builder-navbar-top/mat-toolbar/mat-toolbar-row/pe-builder-navbar-top-button[4]/button`)).click();

        },
    };
}