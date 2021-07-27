const interface = require('readline').createInterface({ 'input': process.stdin, 'output': process.stdout })
require('colors');

// Menu
const showMenu = async (option) => {

  const menu = `
  ${'========================='.green}
    Seleccione una opción
  ${'========================='.green}
  ${'1.'.green} Crear tarea
  ${'2.'.green} Listar tarea
  ${'3.'.green} Listar tareas completadas
  ${'4.'.green} Listar tareas pendiente
  ${'5.'.green} Completar tarea(s)
  ${'6.'.green} Borrar tarea
  ${'0.'.green} Salir
  `;

  console.log(menu);

  return new Promise((resolve, reject) => {
    interface.question('\nSeleccione una opción: ', (opt) => {
      console.log({ opt });
      interface.close();
      resolve(opt);
    });
  })
}

// Pause
const pause = () => {
  return new Promise((resolve, reject) => {
    interface.question(`\nPresione ${'ENTER'.green} para continuar...\n`, (answer) => {
      interface.close()
      resolve()
    })
  })
}

module.exports = { showMenu, pause }