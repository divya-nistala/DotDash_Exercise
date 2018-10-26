/*Remove Task*/
describe("Example", function()
{
	var webdriver=require('selenium-webdriver');

	browser.ignoreSynchronization = true;
	
	it("Open_Page", function()
	{
	    var url = "http://localhost:8080/nss-todo-automation/index.php"
		browser.get(url);
});

it("Remove_Task", function()
{
	browser.findElement(webdriver.By.xpath('//*[@id="todos-content"]/form/ul/li[11]/input')).click();
	browser.findElement(webdriver.By.xpath('/html/body/div[3]/input[1]')).click();
	
	//Sleep here
	browser.sleep(5000);
	
});

});