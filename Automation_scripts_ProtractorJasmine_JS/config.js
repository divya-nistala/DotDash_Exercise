exports.config = 
{
	directConnect: true,
	capabilities:
	{
		'browserName' : 'chrome' 
	},
	framework: 'jasmine',
	specs: ['TASK_*.js']
};