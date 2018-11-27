/*Remove a Task*/
var webdriver=require('selenium-webdriver');
var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var url = "http://localhost:8080/nss-todo-automation/index.php"
driver.get(url);
driver.findElement(webdriver.By.xpath('//*[@id="todos-content"]/form/ul/li[7]/input')).click();
driver.findElement(webdriver.By.xpath('/html/body/div[3]/input[1]')).click();
driver.sleep(5000)