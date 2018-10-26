/*Adding a Category*/
var webdriver=require('selenium-webdriver');
var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var url = "http://localhost:8080/nss-todo-automation/index.php"
driver.get(url);
driver.findElement(webdriver.By.name('categorydata')).sendKeys('Automation');
driver.findElement(webdriver.By.name('colour')).sendKeys('None');
driver.findElement(webdriver.By.xpath('//*[@id="extra"]/input[2]')).click();
//Sleep here
driver.sleep(5000);