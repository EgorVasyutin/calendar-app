// const Pool = require('pg').Pool
//
// const pool = new Pool({
//     user: 'cw90932_app',
//     password: 'vas45644444AZ',
//     host: 'localhost',
//     port: 3306,
//     database: 'cw90932_app'
// })
//
// module.exports = pool

// const Pool = require('pg').Pool
//
// const pool = new Pool({
//     user: 'postgres',
//     password: 'admin',
//     host: 'localhost',
//     port: 5432,
//     database: 'calendar_app'
// })
//
// module.exports = pool

// const { Client } = require('pg');
//
// const client = new Client({
//     user: 'gen_user',
//     host: '212.113.122.144',
//     database: 'default_db',
//     password: 'vas45644444AZ',
//     port: 5432,
// });
//
// client.connect();

const Pool = require('pg').Pool

const pool = new Pool({
    user: 'gen_user',
    host: '212.113.122.144',
    database: 'default_db',
    password: 'vas45644444AZ',
    port: 5432,
})

module.exports = pool
