/*Adding a new Task*/
describe("Example", function()
{
	var webdriver=require('selenium-webdriver');

	browser.ignoreSynchronization = true;
	
	it("Open_Page", function()
	{
	    var url = "http://localhost:8080/nss-todo-automation/index.php"
		browser.get(url);
});

it("Adding_Task", function()
{
	browser.findElement(webdriver.By.name('data')).sendKeys('Take bus');
	browser.findElement(webdriver.By.name('category')).sendKeys('Travel');

	browser.findElement(webdriver.By.name('due_day')).sendKeys('11');
	browser.findElement(webdriver.By.name('due_month')).sendKeys('Dec');
	browser.findElement(webdriver.By.name('due_year')).sendKeys('2018');

	browser.findElement(webdriver.By.xpath('/html/body/div[4]/input[2]')).click();
	
	//Sleep here
	browser.sleep(5000);
	
});

});