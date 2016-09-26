class EventEmitter {

    constructor () {
        this.events = {};
    }

    on (event, handler) {
        if (event == "play" || event=="pause" || event=="resume"){
        this.events[event] = handler;
        } else { 
            console.log("Error: unrecognizable event");
        }
    }

    emit (event) {
        if (this.events[event]) {
            this.events[event](event);
        }  else {
            console.log("Error: the event doesn't exist");
        } 
    }

    off (event, handler) {
        if (this.events[event]) {
            delete this.events[event];
        } else {
            console.log("Error: the event doesn't exist!");
        }
    }
}

export default EventEmitter;