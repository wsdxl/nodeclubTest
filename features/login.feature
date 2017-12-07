@login
Feature: login function test
    author:杜小磊
    date:2017-12-04

    Background:
    Given 进入首页

    Scenario Outline: 登录功能（不同场景）
        Given 导航到登录页面
        When 用户名输入'<username>',密码输入'<password>',点击登录按钮,成功或不成功'<status>',成功得到'<sucMsg>',失败得到提示'<errMsg>'
        Examples:
        |username|password|status|sucMsg|errMsg|
        # |||error||信息不完整。|
        |123|123|error||用户名或密码错误|
        |abcduxiaolei|a111111|sucess|abcduxiaolei||
         

    