var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var onoff      = require('onoff');
/*  CLOSE ALL GPIO  */
var Gpio = onoff.Gpio;
var led = new Gpio(2, 'out');
led.write(0,function(){

});
var led = new Gpio(3, 'out');
led.write(0,function(){

});
var led = new Gpio(4, 'out');
led.write(0,function(){

});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var collectIdsPort = new Array();
collectIdsPort.push(2);
collectIdsPort.push(3);
collectIdsPort.push(4);
var router = express.Router();
router.post('/', function(req, res) {
    console.log('Set GPIO:'+req.body.port+' status: '+req.body.status);
    res.set('Access-Control-Allow-Origin','*');
    var Gpio = onoff.Gpio,
        led = new Gpio(parseInt(req.body.port), 'out'), //#B
        interval;
    var value = parseInt(req.body.status);
    led.write(value,function(){

    });
    res.json({ message: 'Default server response' });
});
router.post('/clear-all', function(req, res) {
    collectIdsPort.map(function(e,id){
        var led = new Gpio(e, 'out');
        led.write(0,function(){

        });
    });
});
router.post('/light-all', function(req, res) {
    collectIdsPort.map(function(e,id){
        var led = new Gpio(e, 'out');
        led.write(1,function(){

        });
    });
});
app.use('/api', router);
app.listen(port);
console.log('Open port ' + port);