let { defineSupportCode } = require('cucumber');
let assert = require('assert')
let action=require('../../uiaction/action')
defineSupportCode(function ({ Given, When, Then }) {
    Given('导航到登录页面', async function () {
        return this.driver.findElement({ css: 'ul > li:nth-child(6) > a' }).click();
    });
    When('用户名输入{string},密码输入{string},点击登录按钮,成功或不成功{string},成功得到{string},失败得到提示{string}', async function (string, string2, string3, string4, string5) {
        return action.userLogin(this.driver,string,string2,string3,string4,string5);
    });

})