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
        value: function on(event, callback) {
            this.events[event] = callback;
        }
    }, {
        key: "emit",
        value: function emit(event) {
            if (this.events[event]) {
                this.events[event](event);
            }
        }
    }, {
        key: "off",
        value: function off(event, callback) {
            if (this.events[event]) {
                delete this.events[event];
            }
        }
    }]);

    return EventEmitter;
}();

exports.default = EventEmitter;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter = require('js/EventEmitter');

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Movie = require('js/Movie');

var _Movie2 = _interopRequireDefault(_Movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: 'log',
        value: function log(event) {
            console.log('The ' + event + ' event has been emitted!');
        }
    }]);

    return Logger;
}();

exports.default = Logger;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EventEmitter2 = require('js/EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _social = require('js/social');

var _social2 = _interopRequireDefault(_social);

var _Actor = require('js/Actor');

var _Actor2 = _interopRequireDefault(_Actor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        Object.assign(_this, Social);
        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        _this.actors = [];
        return _this;
    }

    _createClass(Movie, [{
        key: 'addCast',
        value: function addCast(newActor) {
            if (newActor instanceof Array) {
                this.actors.push.apply(this.actors, newActor);
            } else {
                this.actors.push(newActor);
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
}(_EventEmitter3.default);

exports.default = Movie;
'use strict';

var _Actor = require('js/Actor');

var _Actor2 = _interopRequireDefault(_Actor);

var _EventEmitter = require('js/EventEmitter');

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Logger = require('js/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _social = require('js/social');

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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Movie = require('js/Movie');

var _Movie2 = _interopRequireDefault(_Movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var social = {
    share: function share(friendName) {
        Object.assign(this, _Movie2.default);
        console.log('Share ' + this.title + ' with ' + friendName);
    },
    like: function like(friendName) {
        Object.assign(this, _Movie2.default);
        console.log(friendName + ' liked ' + this.title);
    }
};

exports.default = social;
