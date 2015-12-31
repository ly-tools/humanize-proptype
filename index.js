'use strict';

const capitalize = require('capitalize');
const RE_OBJECTOF = /(?:React\.)?(?:PropTypes\.)?objectOf\((?:React\.)?(?:PropTypes\.)?(\w+)\)/;

function getTypeStr(type) {
  switch (type.name.toLowerCase()) {
    case 'instanceof':
      return `Class(${type.value})`;
    case 'enum':
      return type.value.map(v => `${v.value}`).join('│');
    case 'union':
      return type.value.map(t => `${getTypeStr(t)}`).join('│');
    case 'arrayof':
      return `Array(${getTypeStr(type.value)})`;
    case 'custom':
      if (type.raw.indexOf('function') !== -1 || type.raw.indexOf('=>') !== -1)
        return `Custom(Function)`;
      else if (type.raw.toLowerCase().indexOf('objectof') !== -1) {
        let m = type.raw.match(RE_OBJECTOF);
        if (m && m[1])
          return `ObjectOf(${capitalize(m[1])})`;
        return 'ObjectOf';
      }
      return `Custom`;
    case 'bool':
      return 'Boolean';
    case 'func':
      return 'Function';
    case 'shape':
      let shape = type.value;
      Object.keys(shape).forEach(key => shape[key] = getTypeStr(shape[key]));
      return JSON.stringify(shape);
    default:
      return capitalize(type.name);
  }
}

module.exports = getTypeStr;
