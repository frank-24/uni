const config = require('../config.json');
const log4js = require('log4js');
const path = require('path');
// log4js.configure();

var logger = log4js.getLogger();
logger.level = 'debug';

module.exports = logger;