/*Count and validate the number of tasks*/
describe("Example", function()
{
	var webdriver=require('selenium-webdriver');

	browser.ignoreSynchronization = true;
	
	it("Number_of_Tasks", function()
		{
			url = 'http://localhost:8080/nss-todo-automation/fake-API-call.php'
			browser.get(url);
			
			var json_data;
			
			var request = require('request');
			request(url, function(error, response, body){
				if(!error && !expect(response.statusCode).toBe(200)){
					json_data = body
				}
				
				var obj = JSON.parse(json_data);
				
				// Find size of JSON
				var json_size = 0, key;
				for (key in obj) {
					if (obj.hasOwnProperty(key)) 
						json_size = json_size + 1;
				}
				
				// TASK: Print Number of Tasks
				console.log("Printing Number of Tasks = " + json_size + "\n")
				
			});
		});
});

