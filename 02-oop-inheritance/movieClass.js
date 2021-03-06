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