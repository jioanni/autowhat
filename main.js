'use strict'

const db = require('./server/db/models')
const app = require('./server')
const PORT = 3333;

db.sync()
.then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`SERVER UUUUUUUUP on ${PORT} WUBBALUBBADUBDUUUUB`))
});