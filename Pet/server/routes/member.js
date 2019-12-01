var express = require('express');
var router = express.Router();

const accountController = require('./member/accountController');
const loginController = require('./member/loginController');
const mypageController = require('./member/mypageController');

/* account. */
router.post('/signUp', accountController.signUp);
router.post('/idChk', accountController.idChk);
router.post('/signOut', accountController.signOut);
router.post('/edit', accountController.edit);


/* login. */
router.post('/login', loginController.login);
router.post('/logout', loginController.logout);
router.get('/getSession', loginController.getSession);

/* mypage */
router.get('/getAccountInfo', mypageController.getAccountInfo);
router.get('/getMyAdoptList', mypageController.getMyAdoptList);


module.exports = router;