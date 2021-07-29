const fs = require('fs');
const path = require('path');

const file = path.join(__dirname,'data.json').replace('helpers', 'DB');

const saveFile = (data) => fs.writeFileSync(file, JSON.stringify(data))

const loadFile = () => {
  if ( !fs.existsSync(file) ) return null
  let info = fs.readFileSync(file, { encoding: 'utf8' })
  info = JSON.parse(info)
  console.log(info);
  return info
}

module.exports = { saveFile, loadFile };