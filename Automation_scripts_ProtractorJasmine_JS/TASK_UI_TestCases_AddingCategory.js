/*Adding a Category*/
describe("Example", function()
{
	var webdriver=require('selenium-webdriver');

	browser.ignoreSynchronization = true;
	
	it("Open_Page", function()
	{
	    var url = "http://localhost:8080/nss-todo-automation/index.php"
		browser.get(url);
});

it("Adding_Category", function()
{
	browser.findElement(webdriver.By.name('categorydata')).sendKeys('Automation');
	browser.findElement(webdriver.By.name('colour')).sendKeys('None');

	browser.findElement(webdriver.By.xpath('//*[@id="extra"]/input[2]')).click();
	//Sleep here
	browser.sleep(5000);
	
});

});