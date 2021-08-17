let request = require('request-promise');

const listFilterBase = {
  listBy(params, cb) {
    let link = '?';
    for (let datax in params) {
      link = link + datax + '=' + params[datax] + '&';
    }

    this.options.url = this.baseUri + '/' + link.slice(0, -1);
    this.options.method = 'GET';
    this.options.body = undefined;
    this.options.json = true;

    return request(this.options, cb);
  },

  restart(timeEntryID, cb) {
    this.options.url = this.baseUri + '/' + timeEntryID + '/restart';
    this.options.method = 'PATCH';
    this.options.body = '';
    this.options.json = false;

    return request(this.options, cb);
  },

  stop(timeEntryID, cb) {
    this.options.url = this.baseUri + '/' + timeEntryID + '/stop';
    this.options.method = 'PATCH';
    this.options.body = '';
    this.options.json = false;

    return request(this.options, cb);
  },
};

module.exports = listFilterBase;
