var user = require('./controllers/user');

module.exports = function(app) {
    app.get('/api/user', user.get_user);
};

