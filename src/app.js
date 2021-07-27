const {inquirerMenu, pause} = require('./helpers/inquirer');
const {Tarea,Tareas} = require('./models');

let opt = ''

const main = async () => {

  do {
    // console.clear()
    // opt = await inquirerMenu()

    const tarea = new Tarea('Comprar comida')
    console.log(tarea);
    
    const tareas = new Tareas()
    tareas._listado[tarea.id] = tarea
    console.log(tareas);


    await pause()
  } while (opt !== '0')

}

main()