const { Tareas } = require('../models');
const { mostrarListadoChecklist,
  listadoTareasBorrar,
  inquirerMenu,
  confirmar, leerInput } = require('./inquirer');

class Action {
  static async agregar() {
    const desc = await leerInput('Descripción:');
    Tareas.crearTarea(desc);
  }
  static completo() {
    Tareas.listadoCompleto();
  }
  static completadas() {
    Tareas.listarPendientesCompletadas(true);
  }
  static pendientes() {
    Tareas.listarPendientesCompletadas(false);
  }
  static async check() {
    const ids = await mostrarListadoChecklist(Tareas.listadoArr);
    Tareas.toggleCompletadas(ids);
  }
  static async boorar() {
    const id = await listadoTareasBorrar(Tareas.listadoArr);
    if (id !== '0') {
      const ok = await confirmar('¿Está seguro?');
      if (ok) {
        Tareas.borrarTarea(id);
        console.log('Tarea borrada');
      }
    }
  }

}
module.exports = { Action };