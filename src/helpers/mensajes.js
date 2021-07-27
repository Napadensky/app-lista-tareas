require('colors');

// Menu
const showMenu = () => {
  const interface = require('readline').createInterface({ 'input': process.stdin, 'output': process.stdout })
  return new Promise(resolve => {
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

    interface.question('\nSeleccione una opción: ', (opt) => {
      console.log({ opt });
      interface.close();
      resolve(opt);
    });
  })
}

// Pause
const pause = () => {
  const interface = require('readline').createInterface({ 'input': process.stdin, 'output': process.stdout })
  return new Promise(resolve => {
    interface.question(`\nPresione ${'ENTER'.green} para continuar...\n`, () => {
      interface.close()
      resolve()
    })
  })
}

module.exports = { showMenu, pause }