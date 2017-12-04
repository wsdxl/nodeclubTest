Feature: register function test
    author:杜小磊
    date:2017-12-04

    Scenario Outline: 注册功能不同场景
        Given 导航到注册页面
        When 用户名输入'<username>',密码输入'<pass>',确认密码输入'<re_pass>',电子邮箱输入'<email>',点击登录按钮,登录成功与否'<status>',得到信息'<message>'
    Examples:
    |username|pass|re_pass|email|status|message|
    |||||error|信息不完整。|
    |123|123|123|123@qq.com|error|用户名至少需要5个字符。|
    |abc321|123|321|123@qq.com|error|两次密码输入不一致。|
    |abc321|123|123|123qq.com|error|邮箱不合法。|
    |abc678|123|123|123@qq.com|sucess|欢迎加入 Nodeclub！我们已给您的注册邮箱发送了一封邮件，请点击里面的链接来激活您的帐号。|

