const config = require('./config.json');
const express = require('express');
const bodyParser = require('body-parser');
const webRouter = require('./web_router');
const ip = require('ip');
const logger = require('./common/logger');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', webRouter);

if (!module.parent) {
    app.listen(config.port, () => {
        // console.log('Uni server is listening at ' + ip.address() + ':' + config.port);
        logger.debug('Uni server is listening at ' +
            ip.address() + ':' + config.port);
    });
}

module.exports = app;