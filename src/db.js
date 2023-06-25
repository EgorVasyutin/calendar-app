// const Pool = require('pg').Pool
//
// const pool = new Pool({
//     user: 'Egor',
//     password: 'vas45644444AZ',
//     host: 'localhost',
//     port: 3306,
//     database: 'cw90932_app'
// })
//
// module.exports = pool

const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'calendar_app'
})

module.exports = pool
