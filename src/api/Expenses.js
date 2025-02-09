let base = require('../mixins/Base.js'),
  filterBase = require('../mixins/ListFilterBase'),
  pick = require('lodash/pick.js');

function Expenses(options) {
  this.name = 'expenses';
  this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
  this.options = options;
}

Object.assign(Expenses.prototype, base);

Object.assign(Expenses.prototype, pick(filterBase, ['listBy']));

module.exports = Expenses;
