const {Client} = require('pg')
const client = new Client({
    user: "",
    password: "",
    host: 'localhost',
    port: 5432,
    database: 'sample_db'
})

client.connect()
.then(() => console.log("connected"))
.then(() => client.query("insert into peope values ($1, $2)", [101, 'John']))
.then(() => client.query('SELECT * FROM peope'))
.then(resaults => console.table(resaults.rows))
.catch(e => console.log(e))
.finally(() => client.end())