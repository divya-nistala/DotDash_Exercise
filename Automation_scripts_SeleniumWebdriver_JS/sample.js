 var webdriver = require('selenium-webdriver')
 var request = require('request')
 var driver= new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
 var url= "http://www.google.com"
 driver.get(url)
 request(url,function(response,body){
 var obj=body
 console.log(body.size)
 })