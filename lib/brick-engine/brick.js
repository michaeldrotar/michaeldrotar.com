export default class Brick {
  constructor(middlewares, options) {
    middlewares = middlewares || [];
    options = options || {};
    for (let i = 0, l = middlewares.length; i < l; i++) {
      let mw = middlewares[i];
      let id = mw.id;
      let mw_options = Object.assign({}, mw.defaults, options[id]);
      Object.defineProperty(this, id, new mw(mw_options));
    }
  }
}

Brick.middlewares = [];
Brick.use = function(id, middleware, defaults) {
  if (!defaults) {
    if (typeof middleware === 'object') {
      defaults = middleware;
      middleware = undefined;
    }
    if (!middleware) {
      middleware = id;
      id = undefined;
    }
  }

  if (!id) {
    id = middleware.name;
    id = id[0].toLowerCase() + id.slice(1); // camelCase
  }

  var Thing = class Thing extends this {};
  Thing.middlewares = this.middlewares.concat({
    id: id,
    fn: middleware,
    defaults: defaults
  });
  return Thing;
};
