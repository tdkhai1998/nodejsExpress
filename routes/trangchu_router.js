var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('trangchu', { title: 'Express' });
});
router.get('/dangky', function(req, res, next) {
    res.render('dangky', { title: 'Đăng ký' });
});
router.post('/dangky', function(req, res, next) {
    res.render('test', { noidung: req.body.username })
})
module.exports = router;