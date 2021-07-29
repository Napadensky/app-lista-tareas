const { menuControler } = require('./controller/menuControler');
const { inquirerMenu, pause } = require('./helpers/inquirer');
const { loadFile } = require('./helpers/guardarArchivo');


const main = async () => {
  let option = ''
  loadFile();
  await pause()

  do {
    console.clear()
    
    option = await inquirerMenu()
    await menuControler[option]()
    await pause()

  } while (option !== '0')

}

main()