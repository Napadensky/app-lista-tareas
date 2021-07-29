const { Tareas } = require('../models');
const { leerInput } = require('./inquirer');
const  {loadFile,saveFile}  = require('./guardarArchivo');

class Action {
  static list() {
    const list = Tareas.getTareas()
    console.log(list);
    saveFile(list)
  }
  static async add() {
    const desc = await leerInput('Descripcion: ')
    Tareas.crearTarea(desc);
  }
  static recuperar(){
    loadFile()
  }
}

module.exports = { Action };