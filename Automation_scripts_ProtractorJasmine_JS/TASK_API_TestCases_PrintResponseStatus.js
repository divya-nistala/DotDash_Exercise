/*Test service status of the API endpoint*/
describe("Example", function()
{
	var webdriver=require('selenium-webdriver');

	browser.ignoreSynchronization = true;

	it("Open_Fake_API_Call", function()
		{
			url = 'http://localhost:8080/nss-todo-automation/fake-API-call.php'
			browser.get(url);
			
			var json_data;
			
			var request = require('request');
			request(url, function(error, response, body){
				if(!error && response.statusCode === 200){
					json_data = body
					//Printing Status of the FakeAPICall
					console.log("\nFAKE API CALL: status code = "+ response.statusCode + ", error = " + error);
					if(!expect(response.statusCode).toBe(200))	
						console.log("\nFAKE API CALL: PASS")
				}
		});
		
	});

	it("Open_Page_IndexFile", function()
		{
			var url = "http://localhost:8080/nss-todo-automation/index.php"
			browser.get(url);
			
			var request = require('request');
			request(url, function(error, response, body){
				if(!error && response.statusCode === 200){
					//Printing Status of the Index Page
					console.log("\nGUI: status code = "+ response.statusCode + ", error = " + error);
					if(!expect(response.statusCode).toBe(200))	
						console.log("\nGUI: PASS")
				}
			});
	});

});