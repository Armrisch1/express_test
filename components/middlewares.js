const { requestTime } = require("../middlewares/time.js");
const { logger } = require("../middlewares/logger.js");
const bodyParser = require("body-parser");
const { flash } = require('express-flash-message');
const sequelize = DB;
const session = require("express-session");

app.use(requestTime);
app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

let SequelizeStore = require("connect-session-sequelize")(session.Store);

let store = new SequelizeStore({
    db: sequelize,
});

app.use(
    session({
        secret: "efc2b4e6-e8ce-48ef-9272-e406686d409d",
        store: store,
        resave: false,
        proxy: true,
        saveUninitialized : true
    })
);

// store.sync();

app.use(flash({ sessionKeyName: 'flashMessage' }));