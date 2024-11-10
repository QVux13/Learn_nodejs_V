const  newsRoute = require('./news')
const  siteRoute = require('./Site')


function route(app) {

    app.use('/news', newsRoute)

    app.use('/', siteRoute)

}

module.exports = route;
