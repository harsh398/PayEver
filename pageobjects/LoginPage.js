import {
    By,
    until,
    Key
} from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        usernameField: By.name(`UserName`),
        passwordField: By.xpath(`//input[@id='mat-input-1']`),
        loginBtn: By.xpath(`//*[@id="os-app-main"]/entry-layout-wrapper/entry-layout/div[2]/pe-info-box/div/mat-card/mat-card-content/div/div/login-layout/entry-login/div/form/button`),
        profile: By.xpath(`//button[@class='profile-switch-button mat-button-sm mat-raised-button mat-muted mat-button-rounded mat-button-space-between mat-button-with-arrow ng-star-inserted']`),
        profileClick: By.xpath(`//body[@class='pe-bootstrap']/os-commerce[@id='os-app-main']/switcher-profile-list[@class='ng-star-inserted']/pe-profile-switcher[@class='ng-star-inserted']/div[@class='switcher-wrapper ng-star-inserted switcher-wrapper-opened']/div[@class='switcher-scroll-wrapper data-grid-scroll-container']/div[@class='switcher-wrapper-inner']/pe-profile-switcher-list[@class='profile-business-list']/div[@class='profile-list-layout']/mat-card[@class='mat-card-transparent mat-card-transparent-lg mat-card opened']/mat-card-content[@class='card-content-center-align mat-card-content']/div[@class='profile-list-container container-fluid']/div[1]/div[1]`),

    };

    return {

        typeUserName: async function (username) {
            return await driver.findElement(pageobjects.usernameField).sendKeys(username);
        },
        typePass: async function (password) {
            return await driver.findElement(pageobjects.passwordField).sendKeys(password);
        },
        loginBtn: async function () {
            return await driver.findElement(pageobjects.loginBtn).click();
        },
        loginAqa: async function () {
            return await driver.findElement(pageobjects.profile).click();
        },
        profileSwitch: async function () {
            return await driver.findElement(pageobjects.profileClick).click();
        },
    };
}