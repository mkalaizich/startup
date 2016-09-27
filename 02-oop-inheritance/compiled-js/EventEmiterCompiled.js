"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmiter = function () {
    function EventEmiter() {
        _classCallCheck(this, EventEmiter);

        this.events = {};
    }

    _createClass(EventEmiter, [{
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

    return EventEmiter;
}();

exports.default = EventEmiter;
