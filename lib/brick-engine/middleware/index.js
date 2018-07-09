export default class Middleware {
  static properties() {
    return {};
  }

  constructor(options) {
    var properties = this.constructor.properties();
    var keys = Object.keys(properties);
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      var value = properties[key];
      if (value instanceof Middleware) {
        Object.defineProperty(this, key, { value: value });
      } else {
        this[key] = value;
      }
    }
    this.update(options);
  }

  update(...options) {
    options = Object.assign({}, ...options);
    var keys = Object.keys(options);
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      var value = options[key];
      if (this[key].update) {
        this[key].update(value);
      } else {
        this[key] = value;
      }
    }
  }
}
