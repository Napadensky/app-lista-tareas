const { Tareas } = require('../models');
const { leerInput } = require('./inquirer');
const {FileController}  = require('../controller');

class Action {
  static list() {
    const list = Tareas.getTareas()
    console.log(list);
    FileController.saveFile(list)
  }
  static async add() {
    const desc = await leerInput('Descripcion: ')
    Tareas.crearTarea(desc);
  }
}

module.exports = { Action };