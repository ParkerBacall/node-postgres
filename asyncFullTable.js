const {Client} = require('pg')
const client = new Client({
    user: "",
    password: '',
    host: "localhost",
    port: 5432,
    database: "sample_db"
})



async function execute(){
    try{
    await client.connect()
    console.log("connected")
    // await client.query('insert into peope values (102, jon')
    const {rows} = await client.query("select * from peope")
    console.table(rows)
    }
catch(ex)
{
    console.log(`something wrong happend ${ex}`)
}
    finally{
        await client.end()
        console.log("Client disconnected successfully")
    }
}