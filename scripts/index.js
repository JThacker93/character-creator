const cosmos = require('../data/cosmos')

function changeMoonSelect() {
  if (document.getElementById('dropBox').value == '1') {
    document.getElementById('divText').innerHTML = cosmos[3].description
  }
}

console.log(cosmos[3].description)

module.exports = changeMoonSelect()