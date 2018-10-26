/*Find how many tasks do not have "category" assigned*/
describe("Example", function()
{
	var webdriver=require('selenium-webdriver');

	browser.ignoreSynchronization = true;
	
	it("Tasks_Empty_Category", function()
		{
			url = 'http://localhost:8080/nss-todo-automation/fake-API-call.php'
			browser.get(url);
			var json_data;
			
			var request = require('request');
			request(url, function(error, response, body){
				if(!error && !expect(response.statusCode).toBe(200)){
					json_data = body
					console.log("\nFAKE API CALL: status code = "+ response.statusCode + ", error = " + error);
				}
				
				var obj = JSON.parse(json_data);
				
				// Find size of JSON
				var json_size = 0, key;
				for (key in obj) {
					if (obj.hasOwnProperty(key)) 
						json_size = json_size + 1;
				}
				
				// TASK: Print Task Names with empty category
				console.log("Printing Task Names with empty category:\n")
				for (iter = 0; iter < json_size; iter++)
				{
					if(obj[iter].category == "")
					{
						console.log(obj[iter]["task name"] + "\n")
					}
				}
			});

		});
});

