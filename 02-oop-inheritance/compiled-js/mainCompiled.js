'use strict';

var _Actor = require('Actor');

var _Actor2 = _interopRequireDefault(_Actor);

var _EventEmiter = require('EventEmiter');

var _EventEmiter2 = _interopRequireDefault(_EventEmiter);

var _Logger = require('Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _social = require('social');

var _social2 = _interopRequireDefault(_social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    var lotr = new Movie('Lord of the rings', 2002, '228 min');
    var logger = new _Logger2.default();
    var viggo = new _Actor2.default('Viggo Mortensen', 50);
    var someCast = [new _Actor2.default('Orlando Bloom', 45), new _Actor2.default('Ian McKellen', 65), new _Actor2.default('Elijha Wood', 35)];

    lotr.on('play', logger.log);
    lotr.play();
    lotr.addCast(viggo);
    console.log(lotr.actors);
    lotr.addCast(someCast);
    console.log(lotr.actors);
    lotr.share('Mike Blossom');
    lotr.like('Marco Aurelio');
});
