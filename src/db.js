const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'vas45644444AZ',
    host: 'db.sjsbamimxeyiyehghgoo.supabase.co',
    port: 5432,
    database: 'postgres'
})

module.exports = pool
