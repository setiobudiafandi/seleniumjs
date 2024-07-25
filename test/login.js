const {By, Builder, WebElementCondition, until} = require('selenium-webdriver')
const assert = require('assert')

describe('Login Scenario', function() {
    let driver
    this.timeout(10000);

    before(async function() {
        try {
            driver = await new Builder().forBrowser('chrome').build();
        } catch (error) {
            console.error('Error initializing WebDriver:', error);
            throw error;
        }
    });

    after(async function() {
        if (driver) {
            await driver.quit();
        }
    });

    it('Login success', async() => {
        await driver.manage().setTimeouts({implicit: 4000})
        await driver.get('https://www.saucedemo.com/')
        await driver.manage().window().maximize()
        
        let Url = await driver.getCurrentUrl()
        assert.equal(Url, 'https://www.saucedemo.com/')

        
    })
})