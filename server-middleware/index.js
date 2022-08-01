const express = require('express')
const app = express()

const feeds = require('./feeds')
app.use(feeds)
const sitemap = require('./sitemap')
app.use(sitemap)

if (require.main === module) {
    const port = 3001
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
    })
}

module.exports = app