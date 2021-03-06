/**
 * Copyright 2017-present, Callstack.
 * All rights reserved.
 *
 */

const HasteModule = require('HasteModule'); // eslint-disable-line
// const HastePackage = require('pkg/HastePackage'); // packages not supported
const jpeg = require('./file.jpeg');
const pdf = require('./file.pdf');
const png = require('./file.png');
const gif = require('./file@2x.gif');

module.exports = () => {
  console.log(jpeg, pdf, png, gif, HasteModule);
};
