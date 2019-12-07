import { By, until, Key } from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        usernameField: By.xpath(`//*[@qa-id="control.email"]`),
        passwordField: By.xpath(`//*[@qa-id="control.plainPassword"]`),
        loginBtn: By.xpath(`//*[@id="os-app-main"]/entry-layout-wrapper/entry-layout/div[2]/pe-info-box/div/mat-card/mat-card-content/div/div/login-layout/entry-login/div/form/button`),
    };

    return {

        typeUserName: function (username) {
            driver.wait(until.elementLocated(pageobjects.usernameField), 10000);
            return driver.findElement(pageobjects.usernameField).sendKeys(username);
        },
        typePass: function (password) {
            return driver.findElement(pageobjects.passwordField).sendKeys(password);
        },
        loginBtn: function () {
            return driver.findElement(pageobjects.loginBtn).click();
        },
    };
}