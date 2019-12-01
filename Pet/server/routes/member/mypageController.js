var models = require('../../../models');

let getAccountInfo = function (req, res) {
    models.member.findOne({ where: { 'm_idx': req.session.uIdx } })
        .then(result => {
            res.json({ 'result': result.dataValues, 'success': true });
        })
}

let getMyAdoptList = function (req, res) {
    models.adopt.findAll({ where: { 'm_idx': req.session.uIdx } })
        .then(result => {
            res.json({ 'result': result, 'success': true });
        })
}


module.exports = {
    getAccountInfo: getAccountInfo,
    getMyAdoptList: getMyAdoptList
};