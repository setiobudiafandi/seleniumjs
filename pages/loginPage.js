const { Builder, By, Key, until } = require('selenium-webdriver');

async function login(username, password) {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.saucedemo.com');

    // Find and interact with username and password fields
    await driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys(username);
    await driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);

    // Click on the login button or submit the form
    await driver.findElement(By.xpath("//input[@id='login-button']")).click();

    // Add any necessary waits or assertions after login if needed
    // For example, wait for the dashboard page to load
    // await driver.wait(until.titleIs('Dashboard'), 10000);

    // Optionally return driver or any other useful information
    return driver;
  } catch (error) {
    console.error('Error during login:', error);
    // throw error; // Propagate the error further
  }
}

module.exports = login;
