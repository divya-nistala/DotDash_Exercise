/*Toggle all Tasks and change to Complete*/
var webdriver=require('selenium-webdriver');
var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var url = "http://localhost:8080/nss-todo-automation/index.php"
driver.get(url);
driver.findElement(webdriver.By.xpath('/html/body/div[3]/input[3]')).click();
driver.findElement(webdriver.By.xpath('/html/body/div[3]/input[2]')).click();
//Sleep here
driver.sleep(5000);
