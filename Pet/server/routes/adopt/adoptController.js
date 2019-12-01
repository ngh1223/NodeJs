var models = require('../../../models');

let adopt = function (req, res) {
    models.adopt.count({ where: { 'a_number': req.body.a_number } })
        .then(c => {
            if (c > 0) {
                res.json({ 'success': false });
            } else {
                models.adopt.create({
                    a_number: req.body.a_number,
                    a_age: req.body.a_age,
                    a_sad: req.body.a_sad,
                    a_sn: req.body.a_sn,
                    a_tel: req.body.a_tel,
                    a_img: req.body.a_img,
                    a_breed: req.body.a_breed,
                    a_img: req.body.a_img,
                    a_status: req.body.a_status,
                    m_idx: req.session.uIdx,
                    member_m_idx: req.session.uIdx
                })
                .then(result => {
                            console.log("query success");
                            res.json({ 'success': true });
                })
                    .catch(err => {
                        console.log(err);
                   console.log("query fail");
                   res.json({ 'success': false });
                })
            }
        })

}

let cancel = function (req, res) {
    models.adopt.destroy({
        where: { 'a_number': req.body.a_number }
    })
        .then(result => {
            res.json({ 'success': true });
        })
        .catch(err => {
            res.json({ 'success': false });
        });
}
module.exports = {
    adopt: adopt,
    cancel: cancel
};