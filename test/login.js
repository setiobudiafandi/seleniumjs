const {By, Builder, WebElementCondition, until} = require('selenium-webdriver')
const assert = require('assert')
const login = require('../pages/loginPage')

describe('Login Scenario', function() {
    let driver;
    this.timeout(10000);

    // before(async function() {
    //     try {
    //         driver = await new Builder().forBrowser('chrome').build();
    //     } catch (error) {
    //         console.error('Error initializing WebDriver:', error);
    //         throw error;
    //     }
    // });

    // let username_field
    // let password_field
    // let login_btn

    it('Login success', async() => {
        // await driver.manage().setTimeouts({implicit: 4000})
        // await driver.get('https://www.saucedemo.com/')
        // await driver.manage().window().maximize()
        
        // let Url = await driver.getCurrentUrl()
        // assert.equal(Url, 'https://www.saucedemo.com/')

        // username_field = await driver.findElement(By.xpath("//input[@id='user-name']"))
        // password_field = await driver.findElement(By.xpath("//input[@id='password']"))
        // login_btn = await driver.findElement(By.xpath("//input[@id='login-button']"))
        
        // await username_field.sendKeys('standard_user')
        // await password_field.sendKeys('secret_sauce')
        // await login_btn.click()

        driver = await login('standard_user','secret_sauce')

        let Url1 = await driver.getCurrentUrl()
        assert.equal(Url1, 'https://www.saucedemo.com/inventory.html')
    })

    it('Login failed', async()=> {
        driver = await login('standard_user','secret_saucesdsf')
        let error_msg = await driver.wait(until.elementLocated(By.xpath("//h3[@data-test='error' and contains(text(), 'Epic sadface')]")), 10000);
        await error_msg.isDisplayed()
    })

    afterEach(async function() {
        if (driver) {
            await driver.quit();
        }
    });
})