import camelize from './utils/camelize';
import pluralize from './utils/pluralize';

export default class Brick {
  constructor(options) {
    this.parent = null;
    this.children = [];
    this.setup();
    this.assign(this.data());
    this.assign(options);
  }

  data() {}
  setup() {}
  state() {}

  assign(options) {
    Object.keys(options || {}).forEach((key) => {
      if (typeof this[key] === 'object') {
        if (this[key].assign) {
          this[key].assign(options[key]);
        } else {
          this.assign.call(this[key], options[key]);
        }
      } else {
        this[key] = options[key];
      }
    });
  }

  use(Brick, options) {
    const name = camelize(Brick.name);
    const plural = pluralize(name);
    const brick = new Brick(options);
    brick.parent = this;
    this.children.push(brick);

    this[name] = this[name] || brick;
    this[plural] = this[plural] || [];
    this[plural].push(brick);

    return brick;
  }
}
