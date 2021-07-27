const {inquirerMenu, pause} = require('./helpers/inquirer');

let opt = ''

const main = async () => {

  do {
    console.clear()
    opt = await inquirerMenu()
    await pause()
  } while (opt !== '0')
  
}

main()