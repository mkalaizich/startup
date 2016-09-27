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