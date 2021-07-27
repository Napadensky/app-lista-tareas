const {showMenu,pause} = require('./helpers/mensajes');

console.clear()

const main = async () => {
  await showMenu()
  await pause()
}

main()