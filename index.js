var fs = require('fs')
var unzipper = require('unzipper')
fs.createReadStream('Your Zip Name.zip')
  .pipe(unzipper.Extract({ path: './' }));