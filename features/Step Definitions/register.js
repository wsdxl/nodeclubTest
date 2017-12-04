let { defineSupportCode } = require('cucumber');
let assert=require('assert');
defineSupportCode(function ({ Given, When, Then }) {
    Given('导航到注册页面', async function () {
        await this.driver.get('http://118.31.19.120:3000/');
        return this.driver.findElement({ css: 'ul > li:nth-child(5) > a' }).click();

    });
    let username,email;
    When('用户名输入{string},密码输入{string},确认密码输入{string},电子邮箱输入{string},点击登录按钮,登录成功与否{string},得到信息{string}',async function (string, string2, string3, string4, string5, string6) {
        let a = [1,2,3,4,5,6,7,8,9,'a','b','c','d'];
        let b = a[Math.floor(Math.random() * 13)]
       username=b+string;
       email=b+string4;
        await this.driver.findElement({ id: 'loginname' }).sendKeys(username);
       await this.driver.findElement({ id: 'pass' }).sendKeys(string2);
       await this.driver.findElement({ id: 're_pass' }).sendKeys(string3);
       await this.driver.findElement({ id: 'email' }).sendKeys(email);
       await  this.driver.findElement({css:'.span-primary'}).click();
        if(string5=='sucess'){
           let suc= await this.driver.findElement({css:"strong"}).getText();
           return assert.deepEqual(suc,string6);
        }else{
            let err=await this.driver.findElement({css:"strong"}).getText();
            return assert.deepEqual(err,string6);
        }
    });
})
