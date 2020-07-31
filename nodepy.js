const maxApi = require("max-api");
let {PythonShell} = require('python-shell')

let options = {
  mode: 'text',
  pythonPath: '/usr/bin/python',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: '//Users/gluksupermarket/Desktop/nodepython',
  args: ['value1', 'value2', 'value3']
};

PythonShell.run('hello.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
  maxApi.outlet(results);
});
