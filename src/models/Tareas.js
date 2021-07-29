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
    const list = []
    Object.keys(this._listado).forEach(id => {
      const tarea = this._listado[id]
      list.push(tarea)
    })
    return list
  }

}

module.exports = Tareas;