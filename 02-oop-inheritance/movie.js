'use strict';

var _actorClass = require('./actorClass');

var _actorClass2 = _interopRequireDefault(_actorClass);

var _eventEmitterClass = require('./eventEmitterClass');

var _eventEmitterClass2 = _interopRequireDefault(_eventEmitterClass);

var _loggerClass = require('./loggerClass');

var _loggerClass2 = _interopRequireDefault(_loggerClass);

var _movieClass = require('./movieClass');

var _movieClass2 = _interopRequireDefault(_movieClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _loggerClass2.default();
var gladiator = new _movieClass2.default('Gladiator', 2000, 155);
var karatekid = new _movieClass2.default('Karate Kid', 1984, 126);
var lionking = new _movieClass2.default('The Lion King', 1994, 88);
var ralph = new _actorClass2.default('Ralph Macchio', 54);
var otherCast = [new _actorClass2.default('Pat Morita', 73), new _actorClass2.default('William Zabka', 50), new _actorClass2.default('Elizabeth Shue', 52)];

//Some commands to try out the different methods
gladiator.on('play', logger.log);
gladiator.play();
gladiator.on('rewind', logger.log);
gladiator.on('pause', logger.log);
gladiator.pause();
gladiator.off('play', logger.log);
gladiator.off('resume', logger.log);
karatekid.like('Javo Cremona');
lionking.share('Chepo Garcia');
karatekid.addCast(ralph);
karatekid.addCast(otherCast);
console.log('The Karate Kid Cast:');
for (var i = 0; i < karatekid.cast.length; i++) {
    console.log(karatekid.cast[i]);
}