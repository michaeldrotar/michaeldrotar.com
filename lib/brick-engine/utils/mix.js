export default function mix(superclass, ...mixins) {
  const myClass = class extends superclass {
    constructor(options) {
      super(options);
      mixins.forEach(function(mixin) {
        window.mixin = mixin;
        // mixin.apply(this, options);
      });
    }
  };
  mixins.forEach(function(mixin) {
    Object.keys(mixin).forEach(function(name) {
      myClass[name] = mixin[name];
    });
    const proto = mixin.prototype;
    const myProto = myClass.prototype;
    Object.keys(proto).forEach(function(name) {
      myProto[name] = proto[name];
    });
  });
  return myClass;
}
