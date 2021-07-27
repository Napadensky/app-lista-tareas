const inquirer = require('inquirer');
require('colors')

const answers = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
      { value: '1', name: '1. Crear tarea' },
      { value: '2', name: '2. Listar tarea' },
      { value: '3', name: '3. Listar tareas completadas' },
      { value: '4', name: '4. Listar tareas pendiente' },
      { value: '5', name: '5. Completar tarea(s)' },
      { value: '6', name: '6. Borrar tarea' },
      { value: '0', name: '0. Salir' },
    ]
  }
]

const inquirerMenu = async () => {
  const title = `
  ${'========================='.green}
    Seleccione una opción
  ${'========================='.green}
  `;
  console.log(title);
  const {opcion} = await inquirer.prompt(answers)
  return opcion
}

const pause = async () => {
  const answer = [
    {
      type: 'input',
      name: 'enter',
      message: `Pulsa ${'ENTER'.green} para continuar...`,
    }
  ]
  console.log('\n');
  await inquirer.prompt(answer)
}

module.exports = { inquirerMenu,pause }