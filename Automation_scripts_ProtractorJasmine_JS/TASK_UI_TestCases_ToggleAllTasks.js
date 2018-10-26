/*Toggle all Tasks and change to Complete*/
describe("Example", function()
{
	var webdriver=require('selenium-webdriver');

	browser.ignoreSynchronization = true;
	
	it("Open_Page", function()
	{
	    var url = "http://localhost:8080/nss-todo-automation/index.php"
		browser.get(url);
});

it("Toggle_Task", function()
{
	browser.findElement(webdriver.By.xpath('/html/body/div[3]/input[3]')).click();
	browser.sleep(2000);
	browser.findElement(webdriver.By.xpath('/html/body/div[3]/input[2]')).click();
	
	//Sleep here
	browser.sleep(5000);
	
});

});
