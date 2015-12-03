var express = require('express');
var router = express.Router();
var request = require('request');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '173.194.105.180',
    user: 'student',
    password: 'mulestudent',
    database: 'training',
});

/* GET home page. */
router.get('/', function(req, res, next) {
    return res.json({
        name: 'CS:GO',
        members: [{
            name: 'Helder De Baere'
        }, {
            name: 'Arne Herbots'
        }]
    });
});

router.get('/getqr', function(req, res, next) {
    connection.connect();

    var queryString = 'SELECT * FROM qr_code WHERE img_title = "[CS:GO]"';

    connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;
        console.log('rows: ', rows);
        console.log('fields: ', fields);
        return res.json({
            name: rows[0].img_title,
            buffer: rows[0].img_data
        })
    });
    connection.end();
});

router.post('/registerteam', function(req, res, next) {
    request({
            url: 'https://hackthefuture.herokuapp.com/dashboard/team',
            method: 'PUT',
            json: {
                name: 'CS:GO',
                members: [{
                    name: 'Helder De Baere'
                }, {
                    name: 'Arne Herbots'
                }]
            }
        },
        function(error, response, body, next) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
            if (!body) {
                return res.json({
                    result: 'success'
                });
            } else {
                return next(new Error('Oops! Something went wrong...'));
            }

        }
    );
});

module.exports = router;