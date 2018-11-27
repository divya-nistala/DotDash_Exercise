/*Adding a New Task*/
var webdriver=require('selenium-webdriver');
var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var url = "http://localhost:8080/index.html"
driver.get(url);

driver.findElement(webdriver.By.xpath('//*[@id="dropdownMenuButton"]')).sendKeys('Option 3');


//Sleep here
driver.sleep(5000);