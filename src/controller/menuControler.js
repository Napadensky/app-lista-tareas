const {Action} = require('../helpers/Action');

const menuControler = {
  '1': () => Action.agregar(),
  '2': () => Action.completo(),
  '3': () => Action.completadas(),
  '4': () => Action.pendientes(),
  '5': () => Action.check(),
  '6': () => Action.recuperar(),
  '0': () => { },
}

module.exports = { menuControler };