var express = require('express');
var router = express.Router();


/* GET users listing. */
var controller1= require('../controllers/userC.js');

router.get('/',controller1.userController);

router.get('/1', function(req, res, next) {
  res.send('User 1 is called');
});

router.get('/add', controller1.userAddController);
router.post('/addData', controller1.userAddDataController);
// router.post('/addData', function(req, res){
//   res.render('index');

// });
router.get('/delete', function(req, res, next) {
  res.send('delete users');
});
router.get('/update', function(req, res, next) {
  res.send('update users');
});
router.get('/profile', function(req, res, next) {
  res.send('hfjda fdsf');
});

module.exports = router;
