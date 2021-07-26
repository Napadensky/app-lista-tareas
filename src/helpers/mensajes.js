require('colors');

const mostrarMenu = function (option) {
  const title = `
=========================
  Seleccione una opción
=========================`
  const options = {
    '1.': 'Crear tarea',
    '2.': 'Listar tarea',
    '3.': 'Listar tareas completadas',
    '4.': 'Listar tareas pendiente',
    '5.': 'Completar tarea(s)',
    '6.': 'Borrar tarea',
    '0.': 'Salir'
  }

  console.log(title.replace(/=/g, '='.green));
  for (let item in options) {

    console.log(`${item.green}  ${option == item ? options[item].blue : options[item]}`);
  }
}

module.exports = mostrarMenu