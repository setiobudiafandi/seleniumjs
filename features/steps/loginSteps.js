const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');
const login = require('../../pages/loginPage')

let driver;
let Url;

setDefaultTimeout(10000)

Given('I am on the login page', async function () {
});

When('I input the correct credentials', async function() {
    driver = await login('standard_user','secret_sauce')
    Url = await driver.getCurrentUrl()
})

Then('I could login successfully', async function() {
    assert.equal(Url, 'https://www.saucedemo.com/inventory.html')
    await driver.quit()
})