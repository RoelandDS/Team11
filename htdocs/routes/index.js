var express = require('express');
var router = express.Router();
var request = require('request');

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

router.get('')

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
            	return next(new Erro('Oops! Something went wrong...'));
            }

        }
    );
});

module.exports = router;