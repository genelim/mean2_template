var User = require('../models/user.js');

exports.get_user = function (req, res) {
    User.find(function(err, user) {
        if (err){
            res.json(err);
        }else if(!user || !user.length){
            var new_user = new User();
            new_user.name = 'Mean Stack Template'
            
            new_user.save(function(err, new_user){
               res.json(new_user)
            })
        }else if(user){
            res.json(user)
        }
    });
};