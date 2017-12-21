const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './report',
    reportPath: './report/',
    metadata: {
        browser: {
            name: 'chrome',
            version: '62.0.3202.89'
        },
        device: 'Local test machine',
        platform: {
            name: 'win10*64',
            version: '16.04'
        }
    }
});