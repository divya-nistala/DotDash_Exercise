/*Adding a New Task*/
var webdriver=require('selenium-webdriver');
var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var url = "http://localhost:8080/nss-todo-automation/index.php"
driver.get(url);
driver.findElement(webdriver.By.name('data')).sendKeys('Take bus');
driver.findElement(webdriver.By.name('category')).sendKeys('Travel');

driver.findElement(webdriver.By.name('due_day')).sendKeys('11');
driver.findElement(webdriver.By.name('due_month')).sendKeys('Dec');
driver.findElement(webdriver.By.name('due_year')).sendKeys('2018');

driver.findElement(webdriver.By.xpath('/html/body/div[4]/input[2]')).click();
	
//Sleep here
driver.sleep(5000);