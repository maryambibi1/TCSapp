
module.exports.userController = function (req, res) {
    res.render('users');
};

module.exports.userAddController = function (req, res) {
    
    res.render('users-add');
};

module.exports.userAddDataController = function (req, res) {
    var name = req.body.inputname;
    console.log("jjrhfjrhj")
    console.log(name);
};

