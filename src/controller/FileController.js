const fs = require('fs');
const path = require('path');

class FileController {
  constructor() {
    this.file = {};
  }

  static saveFile(data) {
    const file = path.join(__dirname).replace('controller', 'DB');
    fs.writeFileSync(`${file}/data.json`, JSON.stringify(data));  
  }

  static readFile(file) {
    fs.readFile(file, (err, data) => {
      if (err) {
        console.log(err);
      }
      this.file.data = data;
    });
  }
}

module.exports = FileController;