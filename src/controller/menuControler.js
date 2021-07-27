const {Action} = require('../helpers/Action');

const menuControler = {
  '1': () => Action.add(),
  '2': () => Action.list(),
  '3': () => Action.listComplete(),
  '4': () => Action.listPending(),
  '5': () => Action.check(),
  '6': () => Action.delete(),
  '0': () => { },
}

module.exports = { menuControler };