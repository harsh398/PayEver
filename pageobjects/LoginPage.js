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
    };
}