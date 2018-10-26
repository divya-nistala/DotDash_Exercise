/*Print name of the tasks that are completed*/
describe("Example", function()
{
	var webdriver=require('selenium-webdriver');

	browser.ignoreSynchronization = true;
	
	it("Print_Completed_Tasks", function()
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
				
				// TASK: Print Task names with status as "c"
				console.log("Print Task names that are completed:\n")
				for (iter = 0; iter < json_size; iter++)
				{
					if(obj[iter].status == "c")
					{
						console.log(obj[iter]["task name"] + "\n")
					}
				}
			});
			
		});
});

