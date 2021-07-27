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
}

module.exports = { showMenu }