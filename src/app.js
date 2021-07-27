const { inquirerMenu, pause } = require('./helpers/inquirer');
const { menuControler } = require('./controller/menuControler');

let option = ''

const main = async () => {

  do {
    console.clear()
    option = await inquirerMenu()
    await menuControler[option]()

    await pause()
  } while (option !== '0')

}

main()