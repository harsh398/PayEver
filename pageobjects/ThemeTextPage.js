import { By, until, Key } from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        themesBtn: By.xpath(`//*[@id="os-app-main"]/os-commerce-root/platform-header-component/pe-platform-header/pe-navbar/mat-toolbar/div[1]/button[3]/span/span`),
        addThemeBtn: By.xpath(`//*[@id="os-app-main"]/os-commerce-root/div[2]/div/app-builder/pe-builder-themes-list/div[2]/pe-builder-themes-list-user/div/pe-builder-theme-plus/mat-card`),
        aqaShop :By.xpath(`//*[@id="menus"]/pe-builder-navbar-top/mat-toolbar/mat-toolbar-row/pe-builder-navbar-top-button[4]/button`),
        textBtn: By.xpath(`//*[@id="menus"]/pe-builder-navbar-top/mat-toolbar/mat-toolbar-row/pe-builder-navbar-top-button[4]/button`),
    };

    return {
        themeBtn: function () {
            driver.wait(until.elementLocated(pageobjects.themesBtn), 10000);
            return driver.findElement(pageobjects.themesBtn).click();
        },
        addTheme: function () {
            driver.wait(until.elementLocated(pageobjects.addThemesBtn), 10000);
            return driver.findElement(pageobjects.addThemesBtn).click();
        },
        addText: function () {
            driver.wait(until.elementLocated(pageobjects.aqaShop), 10000);
            return driver.findElement(pageobjects.textBtn).click();
        },
        clickText: function () {
            driver.wait(until.elementLocated(pageobjects.clickWidget), 10000);
            return driver.findElement(pageobjects.clickWidget).click();
        },

    };
}