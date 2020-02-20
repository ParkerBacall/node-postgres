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
.then(() => client.query('SELECT * FROM peope where name = $1', ["Parker"]))
.then(resaults => console.table(resaults.rows))
.catch(e => console.log(e))
.finally(() => client.end())