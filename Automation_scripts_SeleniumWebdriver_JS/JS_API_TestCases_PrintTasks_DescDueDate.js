/*Read API response and print tasks in descending "due date" order*/
var webdriver=require('selenium-webdriver');
var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var url = 'http://localhost:8080/nss-todo-automation/fake-API-call.php'
driver.get(url);
	var json_data;
	var request = require('request');
			request(url, function(error, response, body){
				if(!error && response.statusCode === 200){
					json_data = body
				}
				var obj = JSON.parse(json_data);
				
				// Find size of JSON
				var json_size = 0, key;
				for (key in obj) {
					if (obj.hasOwnProperty(key)) 
						json_size = json_size + 1;
					}
				
				// TASK: Print fake API data w.r.t Due Dates in descending order
				console.log("Printing Data in Descending Order of Due Dates")
				
				var due_date_array = new Array();

				for (iter = 0; iter < json_size; iter++)
				{
					if(obj[iter]["due date"] != "\r\n")
					{
						due_date_array[iter] = obj[iter]["due date"]
					}
				}
					
				// Sort array in desc order
				due_date_array.sort(function(a, b){return b-a});
				
				// Print in descending order
				for (i = 0; i < due_date_array.length; i++)
				{	
					for (j = 0; j < json_size; j++)
					{
						if(due_date_array[i] == obj[j]["due date"])
						{
							console.log(obj[j])
						}
					}
				}				
			});
