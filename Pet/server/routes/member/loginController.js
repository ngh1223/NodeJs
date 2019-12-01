var models = require('../../../models');

let login = function (req, res) {
    models.member.findOne({ where: { 'm_id': req.body.uId } })
        .then(result => {
            if (result !== undefined && result != null && result.dataValues.m_pw == req.body.uPw) {
                req.session.uIdx = result.dataValues.m_idx;
                res.json({ 'session': req.session, 'success':true });
            } else {
                res.json({ 'success': false });
            }

        })
}

let logout = function (req, res) {
    console.log(req.session);
    req.session.uIdx = '';
    res.json({ 'session': req.session, 'success': true });
};

let getSession = function (req, res) {
    res.json({'session': req.session});
}

module.exports = {
    login: login,
    logout: logout,
    getSession: getSession
};