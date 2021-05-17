const UserModel = require('../modules/login');

module.eports = {

    login: function(req, res) {
        const password = req.body.password;
        const email = req.body.email;
        userModel.findOne({email: email}, ).lean().exec(function(err, user)) {
            
        }
    }
}


