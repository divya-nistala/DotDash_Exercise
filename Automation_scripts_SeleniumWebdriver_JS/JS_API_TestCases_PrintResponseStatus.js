/*Test service status of the API endpoint*/
var webdriver=require('selenium-webdriver');
var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var url = 'http://localhost:8080/nss-todo-automation/fake-API-call.php'
driver.get(url);
	var request = require('request');
			request(url, function(error, response, body){
				if(!error && response.statusCode === 200){
					//Printing Status of the FakeAPICall
					console.log("\nFAKE API CALL: status code = "+ response.statusCode + ", error = " + error);
					if( response.statusCode === 200)	
						console.log("\nFAKE API CALL: PASS")
				}
		
	});

	var url_UI = "http://localhost:8080/nss-todo-automation/index.php"
	driver.get(url_UI);
	
	var request_UI = require('request');
	request_UI(url_UI, function(error, response, body){
		if(!error && response.statusCode === 200){
			//Printing Status of the Index Page
			console.log("\nGUI: status code = "+ response.statusCode + ", error = " + error);
			if(response.statusCode === 200)	
				console.log("\nGUI: PASS")
		}

	});