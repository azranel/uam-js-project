const jquery = require('jquery');

const address = "http://localhost:8080";

export default class ProductSource {
  static all() {
    return jquery.get(address + '/menu', function(data) { }, "json");
  }
}
