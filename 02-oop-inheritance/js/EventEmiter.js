class EventEmiter {
    constructor () {
        this.events = { };
    }

    on (event, callback) {
        this.events[event] = callback;
    }

    emit (event) {
        if (this.events[event]) {
            this.events[event](event);
        }
    }

    off (event, callback) {
        if (this.events[event]) {
            delete this.events[event];
        }
    }
}

export default EventEmiter;