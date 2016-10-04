(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};

exports.default = Actor;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    _createClass(EventEmitter, [{
        key: "on",
        value: function on(event, handler) {
            if (event == "play" || event == "pause" || event == "resume") {
                this.events[event] = handler;
            } else {
                console.log("Error: unrecognizable event");
            }
        }
    }, {
        key: "emit",
        value: function emit(event) {
            if (this.events[event]) {
                this.events[event](event);
            } else {
                console.log("Error: the event doesn't exist");
            }
        }
    }, {
        key: "off",
        value: function off(event, handler) {
            if (this.events[event]) {
                delete this.events[event];
            } else {
                console.log("Error: the event doesn't exist!");
            }
        }
    }]);

    return EventEmitter;
}();

exports.default = EventEmitter;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: 'log',
        value: function log(events) {
            console.log('The ' + events + ' event has been emitted!');
        }
    }]);

    return Logger;
}();

exports.default = Logger;

},{}],4:[function(require,module,exports){
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

},{"./actorClass":1,"./eventEmitterClass":2,"./loggerClass":3,"./movieClass":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _eventEmitterClass = require('./eventEmitterClass');

var _eventEmitterClass2 = _interopRequireDefault(_eventEmitterClass);

var _socialClass = require('./socialClass');

var _socialClass2 = _interopRequireDefault(_socialClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        Object.assign(_this, _socialClass2.default);
        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        _this.cast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: 'addCast',
        value: function addCast(actor) {
            if (actor instanceof Array) {
                for (var i = 0; i < actor.length; i++) {
                    this.cast.push(actor[i]);
                }
            } else {
                this.cast.push(actor);
            }
        }
    }, {
        key: 'play',
        value: function play() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'play');
        }
    }, {
        key: 'pause',
        value: function pause() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'pause');
        }
    }, {
        key: 'resume',
        value: function resume() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'resume');
        }
    }]);

    return Movie;
}(_eventEmitterClass2.default);

exports.default = Movie;

},{"./eventEmitterClass":2,"./socialClass":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Social = {

    like: function like(friendName) {
        console.log(friendName + " likes " + this.title);
    },

    share: function share(friendName) {
        console.log("Share " + this.title + " with " + friendName);
    }
};

exports.default = Social;

},{}]},{},[4]);