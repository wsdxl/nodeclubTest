let { defineSupportCode } = require('cucumber')
let assert = require('assert');
let registerPage = require('../comm/registerPage');
let loginPage = require('../comm/loginPage');
let MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://118.31.19.120:27017/node_club_dev';
let userRegister = async function (driver, username, pass, repass, email, status, message) {
    await driver.findElement(registerPage.username).sendKeys(username);
    await driver.findElement(registerPage.password).sendKeys(pass);
    await driver.findElement(registerPage.repass).sendKeys(repass);
    await driver.findElement(registerPage.email).sendKeys(email);
    await driver.findElement(registerPage.registerBtn).click();
    if (status == 'sucess') {
        let suc = await driver.findElement(registerPage.msg).getText();
        return assert.deepEqual(suc, message);
    } else {
        let err = await driver.findElement(registerPage.msg).getText();
        return assert.deepEqual(err, message);
    }

}

let userLogin = async function (driver, username, pass, status, sucMsg, errMsg) {
    await driver.findElement(loginPage.username).sendKeys(username);
    await driver.findElement(loginPage.password).sendKeys(pass);
    await driver.findElement(loginPage.loginBtn).click();
    if (status == 'error') {
        let erMsg = await driver.findElement(loginPage.errMsg).getText();
        return assert.deepEqual(errMsg, erMsg);
    }
    else {
        let scMsg = await driver.findElement(loginPage.tip).getText();
        return assert.deepEqual(sucMsg, scMsg);
    }
}

let activeUser = function (user, done) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        let collection = db.collection("users")
        // active user;

        console.log("will active the user", user)
        collection.updateOne({ name: `${user}` }, { $set: { "active": true } }, function (err, docs) {
            console.log(err, docs.result)
        })
        db.close(done);
    });
}



exports.userRegister = userRegister;
exports.userLogin = userLogin;
exports.activeUser = activeUser;
