let { defineSupportCode } = require('cucumber');
let assert = require('assert');
let MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://118.31.19.120:27017/node_club_dev';
let action = require('../../uiaction/action')
defineSupportCode(function ({ Given, When, Then }) {
    Given('进入首页', async function () {
        return this.driver.get('http://118.31.19.120:3000/');
    });

    Given('导航到注册页面', async function () {
        return this.driver.findElement({ css: 'ul > li:nth-child(5) > a' }).click();

    });
    let username, email;
    When('用户名输入{string},密码输入{string},确认密码输入{string},电子邮箱输入{string},点击登录按钮,登录成功与否{string},得到信息{string}', async function (string, string2, string3, string4, string5, string6) {
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd'];
        let b = a[Math.floor(Math.random() * 13)]
        username = b + string;
        email = b + string4;
        return action.userRegister(this.driver, username, string2, string3, email, string5, string6);

    });
    Then('链接数据库，激活邮箱', async function () {
        return action.activeUser(`${username}`);
    });
    Then('用刚才输出的密码{string}可以成功登录', async function (string) {
        await this.driver.get("http://118.31.19.120:3000/signin");
        return action.userLogin(this.driver, `${username}`, string, 'sucess', `${username}`);
    });
})
