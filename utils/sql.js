const config = require("../config");
const sql = require('mysql');

// Creates connection to database
const connect = sql.createConnection({
    host: config.host,
    port: config.port,
    user: config.uname,
    password: config.pword,
    database: config.database
});

module.exports = connect;