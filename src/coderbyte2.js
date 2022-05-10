const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname);
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
		let list = '';

    files.forEach(function (file, index) {
      if (index === 0) {
				list += file;
			} else {
				list += `, ${file}`;
			}
    });

		console.log(list)
});