const {Client} = require('pg')
const client = new Client({
    host: "localhost",
    port: 5432,
    database: "testnode",
    user: "postgres",
    password : "12345678",
})
client.connect()
    .then(() => console.log('SQL connected'))
    .catch(e => console.log(e))



module.exports = client
// {
//     "password" : "123456",
//     "email" : "dsfsdfds",
//     "firstName" : "dsfsf",
//     "lastName" : "dfsfsdfds",
//     "age" : 12,
//     "address" : "dfsdfs"
// }
