const {Client} = require('pg')

const client = new Client( {
    user: '',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'sample_db'
})
exexute()
async function exexute(){

try{
    await client.connect()
    await client.query('BEGIN')
    const {rows} = await client.query("select * from peope ")
    console.table(rows)
    await client.query('insert into peope values ($1, $2)', [1008, "bill"])
    console.log("Inserted a new row")
    await client.query('COMMIT')
}
catch(ex){
    console.log("failed to execute something" + ex)
    await client.query('ROLLBACK')
}
finally{
    await client.end()
    console.log("boop")
}

}