import _ from 'lodash';
import windowObj from '../window';

export var window = windowObj || {};
var vendors = ['webkit', 'moz', 'ms', 'o'];
var alternateNames = {
  requestFullscreen: ['requestFullScreen']
};
var cache = {};

function getPrefixedNames(name) {
  var after = name[0].toUpperCase() + name.slice(1);
  return _.map(vendors, x => {
    return x + after;
  });
}

function getAlternateNames(name) {
  return alternateNames[name] || [];
}

function getAllNames(name) {
  var alts = getAlternateNames(name).map(x => {
    return [x].concat(getPrefixedNames(x));
  });
  return [name].concat(getPrefixedNames(name), ...alts);
}

export function get(preferred_name) {
  if (cache[preferred_name] !== undefined) return cache[preferred_name];

  var names = getAllNames(preferred_name);
  for (var i = 0, l = names.length; i < l; i++) {
    var name = names[i];
    if (window[name]) {
      cache[preferred_name] = window[name];
      return window[name];
    }
  }

  cache[preferred_name] = null;
}

// (function() {
//   var lastTime = 0;
//   var vendors = ['ms', 'moz', 'webkit', 'o'];
//
//   for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
//     window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
//     window.cancelAnimationFrame =
//       window[vendors[x] + 'CancelAnimationFrame'] ||
//       window[vendors[x] + 'CancelRequestAnimationFrame'];
//   }
//
//   if (!window.requestAnimationFrame) {
//     window.requestAnimationFrame = function(callback, element) {
//       var currTime = Date.now(),
//         timeToCall = Math.max(0, frame_time - (currTime - lastTime));
//       var id = window.setTimeout(function() {
//         callback(currTime + timeToCall);
//       }, timeToCall);
//       lastTime = currTime + timeToCall;
//       return id;
//     };
//   }
//
//   if (!window.cancelAnimationFrame) {
//     window.cancelAnimationFrame = function(id) {
//       clearTimeout(id);
//     };
//   }
// })();
