var formidable = require('formidable');
var fs = require("fs");
var models = require('../../../models');

let signUp = function (req, res) {
    var form = new formidable.IncomingForm();
    
    form.parse(req, function (err, fields, files) {
        if (files.fileField1 === undefined) {
            res.status(500);
            res.json({ 'success': false, 'msg': 'no file sent' });
        }

        var oldPath = files.fileField1.path,
            fileName = new Date().getTime() + files.fileField1.name,
            newPath = __dirname + "./../../../public/uploads/" + fileName;
        console.log(newPath);

        fs.readFile(oldPath, function (err, data) {
            fs.writeFile(newPath, data, function (err) {
                fs.unlink(oldPath, function (err) {
                    if (err) {
                        res.status(500);
                        res.json({ 'success': false });
                    } else {

                        models.member.create({
                            m_id: fields.uId,
                            m_name: fields.uN,
                            m_pw: fields.uPw,
                            m_address: fields.uAd,
                            m_img: fileName
                        })
                        .then(result => {
                            console.log("데이터 추가 완료");
                            res.json({ 'success': true });
                        })
                        .catch(err => {
                            console.log("데이터 추가 실패");
                            res.json({ 'success': false });
                        })

                    }
                });
            });
        });
    });
};

let idChk = function (req, res) {
    models.member.count({ where: { 'm_id': req.body.uId } })
        .then(c => {
            if (c > 0) {
                res.json({ 'success': true });
            } else {
                res.json({ 'success': false });
            }
            
    })
}

let signOut = function (req, res) {

    if (req.session.uIdx == req.body.mIdx) {
        models.member.destroy({
            where: { 'm_idx': req.session.uIdx }
        })
            .then(result => {
                req.session.uIdx = '';
                res.json({ 'success': true });
        })
            .catch(err => {
                res.json({ 'success': false });
        });
    }
    
};


let edit = function (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        if (files.fileField1 === undefined) {
            res.status(500);
            res.json({ 'success': false, 'msg': 'no file sent' });
        }

        var oldPath = files.fileField1.path,
            fileName = new Date().getTime() + files.fileField1.name,
            newPath = __dirname + "./../../../public/uploads/" + fileName;
        console.log(newPath);

        fs.readFile(oldPath, function (err, data) {
            fs.writeFile(newPath, data, function (err) {
                fs.unlink(oldPath, function (err) {
                    if (err) {
                        res.status(500);
                        res.json({ 'success': false });
                    } else {

                        models.member.update({
                            m_id: fields.uId,
                            m_name: fields.uN,
                            m_pw: fields.uPw,
                            m_address: fields.uAd,
                            m_img: fileName
                        }, {
                            where: { m_idx: req.session.uIdx }
                        })
                            .then(result => {
                                console.log("edit success");
                                res.json({ 'success': true });
                            })
                            .catch(err => {
                                console.log("edit fail");
                                res.json({ 'success': false });
                            })

                    }
                });
            });
        });
    });
};

module.exports = {
    signUp: signUp,
    signOut: signOut,
    idChk: idChk,
    edit: edit
};