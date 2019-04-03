const server = require('./server')

const port = 4000

server.listen(port, () => {
    console.log(`\n**server up and running on port ${port}**`)
})