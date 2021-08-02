const { menuControler } = require('./controller/menuControler');
const {
  mostrarListadoChecklist, // no es de app
  listadoTareasBorrar, // no es de app
  inquirerMenu,
  confirmar, // no es de app
  pause
} = require('./helpers/inquirer');
const { saveFile, loadFile } = require('./helpers/guardarArchivo');
const { Tareas } = require('./models');

const main = async () => {
  let option = ''

  const tareasDB = loadFile();
  if (tareasDB) Tareas.cargarTareasFromArray(tareasDB);

  await pause()

  do {
    console.clear()

    option = await inquirerMenu()
    await menuControler[option]()
    saveFile(Tareas.listadoArr)
    await pause()

  } while (option !== '0')

}

main()