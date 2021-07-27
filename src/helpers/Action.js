const { Tareas } = require('../models');
const { leerInput } = require('./inquirer');

class Action {
  static list() {
    console.log(Tareas.getTareas());
  }
  static async add() {
    const desc = await leerInput('Descripcion: ')
    Tareas.crearTarea(desc);
  }
}

module.exports = { Action };