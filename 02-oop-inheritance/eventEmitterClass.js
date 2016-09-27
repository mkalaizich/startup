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