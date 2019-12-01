const request = require('request');
const convert = require('xml-js');

let getAdoptList = function (req, res) {
 
    var url = 'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic';
    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=263PhCIPJI0fpMapicXwU5xSDs0ExXRutIN0Snnbxtw3ND1fEFt4Ij3pHM1ctjF7Q10eo2bfDUD1Y2rTxTXx2A%3D%3D'; /* Service Key*/
    queryParams += '&' + encodeURIComponent('bgnde') + '=' + encodeURIComponent('20190101'); /* ���⳯¥ (�˻� ������) (YYYYMMDD) */
    queryParams += '&' + encodeURIComponent('endde') + '=' + encodeURIComponent('20191130'); /* ���⳯¥ (�˻� ������) (YYYYMMDD) */
    queryParams += '&' + encodeURIComponent('upkind') + '=' + encodeURIComponent('417000'); /* �����ڵ� - �� : 417000 - ����� : 422400 - ��Ÿ : 429900 */
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(req.query.number); /* ������ ��ȣ */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* �������� ������ ���� */

    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        var xmlToJson = convert.xml2json(body, { compact: true, spaces: 4 });
        res.json({ 'result': xmlToJson, 'success': true });

    });
};


module.exports = {
    getAdoptList: getAdoptList,
};