const controller = require('../controllers/auth.controller')
module.exports = function (app){
    app.get('/api/auth/signin', controller.signin)
}
