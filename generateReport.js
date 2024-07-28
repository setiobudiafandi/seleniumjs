const reporter = require('cucumber-html-reporter');
const path = require('path');

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, 'reports', 'cucumber-report.json'),
  output: path.join(__dirname, 'reports', 'cucumber-report.html'),
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '127'
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '11'
    }
  }
};

reporter.generate(options);
