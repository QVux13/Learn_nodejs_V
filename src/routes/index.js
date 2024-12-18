const  newsRoute = require('./news');
const  meRoute = require('./me');
const  siteRoute = require('./Site');
const  coursesRoute = require('./courses');


function route(app) {

    app.use('/news', newsRoute);
    app.use('/me', meRoute);
    app.use('/courses', coursesRoute);

    app.use('/', siteRoute);

}

module.exports = route;
