'use strict';

require('should');
const humanize = require('../index');

describe('humanize-proptype', () => {
  it('Number', () => {
    return humanize({
      name: 'number'
    }).should.be.eql('Number');
  });
  it('Array', () => {
    return humanize({
      name: 'array'
    }).should.be.eql('Array');
  });
  it('Boolean', () => {
    return humanize({
      name: 'bool'
    }).should.be.eql('Boolean');
  });
  it('Function', () => {
    return humanize({
      name: 'func'
    }).should.be.eql('Function');
  });
  it('Object', () => {
    return humanize({
      name: 'object'
    }).should.be.eql('Object');
  });
  it('String', () => {
    return humanize({
      name: 'string'
    }).should.be.eql('String');
  });
  it('Node', () => {
    return humanize({
      name: 'node'
    }).should.be.eql('Node');
  });
  it('Element', () => {
    return humanize({
      name: 'element'
    }).should.be.eql('Element');
  });
  it('InstanceOf', () => {
    return humanize({
      name: 'instanceOf',
      value: 'Message'
    }).should.be.eql('Class(Message)');
  });
  it('Enum', () => {
    return humanize({
      name: 'enum',
      value: [{
        value: '\'News\'',
        computed: false
      }, {
        value: '\'Photos\'',
        computed: false
      }]
    }).should.be.eql('\'News\'│\'Photos\'');
  });
  it('Union', () => {
    return humanize({
      name: 'union',
      value: [{
        name: 'string'
      }, {
        name: 'number'
      }, {
        name: 'instanceOf',
        value: 'Message'
      }]
    }).should.be.eql('String│Number│Class(Message)');
  });
  it('ArrayOf', () => {
    return humanize({
      name: 'arrayOf',
      value: {
        name: 'number'
      }
    }).should.be.eql('Array(Number)');
  });
  it('ObjectOf', () => {
    return humanize({
      name: 'custom',
      raw: 'React.PropTypes.objectOf(React.PropTypes.number)'
    }).should.be.eql('ObjectOf(Number)');
  });
  it('Shape', () => {
    return humanize({
      name: 'shape',
      value: {
        color: {
          name: 'string'
        },
        fontSize: {
          name: 'number'
        }
      }
    }).should.be.eql('{"color":"String","fontSize":"Number"}');
  });
  it('Custom', () => {
    return humanize({
      name: 'custom',
      raw: 'function(props, propName, componentName) {}'
    }).should.be.eql('Custom(Function)');
  });
  it('Complex', () => {
    return humanize({
      name: 'union',
      value: [{
        name: 'shape',
        value: {
          color: {
            name: 'string'
          },
          fontSize: {
            name: 'number'
          }
        }
      }, {
        name: 'arrayOf',
        value: {
          name: 'enum',
          value: [{
            value: '\'News\'',
            computed: false
          }, {
            value: '\'Photos\'',
            computed: false
          }]
        }
      }, {
        name: 'instanceOf',
        value: 'Message'
      }]
    }).should.be.eql('{"color":"String","fontSize":"Number"}│Array(\'News\'│\'Photos\')│Class(Message)');
  });
});
