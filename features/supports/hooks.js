let mkdirp = require('mkdirp');
let path = require('path');
let fs = require('fs');
let { getrootpath } = require('../../uiaction/util');
let { defineSupportCode } = require('cucumber');
defineSupportCode(function ({ Before, After }) {
    Before(async function () {
        await this.driver.manage().window().maximize();
    })
    After(async function (testcase) {
        let dirname = new Date().toLocaleDateString();
        let imagename = new Date().toLocaleTimeString().replace(/:/g, '_');
        let dirpath = path.join(getrootpath(), dirname);
        if (!fs.existsSync(dirpath)) {
            mkdirp(dirpath);
        }
        if (testcase.result.status !== 'passed') {
            let imagedata = await this.driver.takeScreenshot();
            fs.writeFileSync(dirpath + '/' + imagename + testcase.pickle.name + '.png', imagedata, 'base64')
        }
        let imagedata1 = await this.driver.takeScreenshot();
        this.attach(imagedata1, 'image/png');

        // return this.driver.quit();
    })
})