let { defineSupportCode } = require('cucumber');
let assert = require('assert')
defineSupportCode(function ({ Given, When, Then }) {
    Given('导航到登录页面', async function () {
        return this.driver.findElement({ css: 'ul > li:nth-child(6) > a' }).click();
    });
    When('用户名输入{string},密码输入{string},点击登录按钮,成功或不成功{string},成功得到{string},失败得到提示{string}', async function (string, string2, string3, string4, string5) {
        await this.driver.findElement({ id: 'name' }).sendKeys(string);
        await this.driver.findElement({ id: 'pass' }).sendKeys(string2);
        await this.driver.findElement({ css: '.span-primary' }).click();
        if (string3 == 'error') {
            let erMsg = await this.driver.findElement({ css: "strong" }).getText();
            return assert.deepEqual(string5, erMsg);
        }
        else {
            let scMsg = await this.driver.findElement({ css: 'span.user_name > a' }).getText();
            return assert.deepEqual(string4, scMsg);
        }
    });

})