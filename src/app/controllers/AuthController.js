const UserModel = require('../modules/register');
const bcrypt = require('bcryptjs');
const consts = require('../conts');
const jwt = require('jsonwebtoken');
const conts = require('../conts');

module.exports = {

    register: async function(req, res) {
        try {
            let u = await UserModel.findOne({email: req.body.email});
            if(!u) {
                const user = new UserModel(req.body);
                user.password = bcrypt.hashSync(req.body.password, consts.bcryptSalts);
                await user.save();
                delete user.password;
                res.status(200).json(user);
            } 
            else {
                res.status(403).json({message: 'O email já foi cadastrado!', error: {}});
            }
        }
        catch(e) {
            res.status(500).json({message: 'Erro ao salvar usuário', error: e});
        }
    },
 
    login: function(req, res) {
        const password = req.body.password; 
        const email = req.body.email;
        UserModel.findOne({email: email}).lean().exec(function(err, user) {
            if(err) { 
                return res.status(500).json({
                    message: 'Erro no servidor', error: err
                })
            }
            const aut_err = (password == '' || password == null || !user);
            
            if(!aut_err) {
                if(bcrypt.compareSync(password, user.password)) {
                    let token = jwt.sign({id: user._id}, consts.keyJWT, {expiresIn: conts.expiresJWT});
                    delete user.password;
                    return res.json({...user, token: token});
                }
            }
            
            return res.status(404).json({
                message: 'Email ou password errado'
            })
        })
    },


    checkToken: function(res, res, next) {
        const token = req.get('Authorization');
        if(!token) {
            return res.status(401).json({message: 'Token não encontrado'});
        }
         jwt.verify(token, consts.keyJWT, 
            (err, decoded) => {
                if(err || !decoded) {
                    return res.status(401).json({
                        message: 'Token errado. Ocorreu um erro de atenticação'
                    });
                }
                next();
            })
    }

}


