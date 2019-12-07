import { By, until, Key } from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        themesBtn: By.xpath(`//*[@id="os-app-main"]/os-commerce-root/platform-header-component/pe-platform-header/pe-navbar/mat-toolbar/div[1]/button[3]/span/span`),
        addThemeBtn: By.xpath(`/html[1]/body[1]/os-commerce[1]/os-commerce-root[1]/div[2]/div[1]/app-builder[1]/pe-builder-themes-list[1]/div[2]/pe-builder-themes-list-user[1]/div[1]/pe-builder-theme-plus[1]/mat-card[1]/mat-card-content[1]`),
        aqaShop :By.xpath(`//*[@id="menus"]/pe-builder-navbar-top/mat-toolbar/mat-toolbar-row/pe-builder-navbar-top-button[4]/button`),
        textBtn: By.xpath(`//*[@id="menus"]/pe-builder-navbar-top/mat-toolbar/mat-toolbar-row/pe-builder-navbar-top-button[4]/button`),
    };

    return {
        themeBtn: function () {
            driver.wait(until.elementLocated(pageobjects.themesBtn), 10000);
            return driver.findElement(pageobjects.themesBtn).click();
        },
        addTheme: function () {
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