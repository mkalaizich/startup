'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Movie = require('Movie');

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
