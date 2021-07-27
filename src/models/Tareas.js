const Tarea = require("./Tarea");

class Tareas {
  _listado = {}

  constructor() {
    this._listado = {}
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }
  getTareas() {
    return this._listado
  }

}

module.exports = Tareas;