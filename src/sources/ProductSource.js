const qwest = require('qwest');
qwest.base = 'http://localhost:8080';

export default class ProductSource {
  static all() {
    return qwest.get('/menu');
  }
}
