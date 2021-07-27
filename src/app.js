const { showMenu, pause } = require('./helpers/mensajes');

console.clear()

let opt = ''

const main = async () => {
  
  do {
    opt = await showMenu()
    await pause()
  } while (opt !== '0')

}

main()