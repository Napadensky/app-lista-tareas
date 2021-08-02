const { Tareas } = require('../models');
const { leerInput } = require('./inquirer');
// const  {loadFile,saveFile}  = require('./guardarArchivo');

class Action {
  static async agregar() {
    const desc = await leerInput('Descripción:');
    Tareas.crearTarea(desc);
  }
  static completo() {
    Tareas.listadoCompleto();
  }
  static completadas(){
    Tareas.listarPendientesCompletadas(true);
  }
  static pendientes(){
    Tareas.listarPendientesCompletadas(false);
  }

}

module.exports = { Action };