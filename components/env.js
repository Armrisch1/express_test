const path = require('path');
const express = require('express');
const {getConnection} = require(path.resolve() + '/database/config/db.js');


global.PORT = process.env.PORT ?? 3000;
global.DIRNAME = path.resolve();
global.PATH = path;
global.express = express;
global.app = express();
global.DB = getConnection();