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

class Logger {

    log (event) {
        console.log('The '+event+' event has been emitted!');
    }
}

class Movie extends EventEmitter {

    constructor (title,year,duration) {
        super ();
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play () {
        super.emit('play');
    }

    pause () {
        super.emit('pause');
    }

    resume () {
        super.emit('resume');
    }
};

let logger = new Logger ();
let gladiator = new Movie("Gladiator",2000,155);
let karatekid = new Movie("Karate Kid",1984,126);
let lionking = new Movie("The Lion King",1994,88);

gladiator.on('play', logger.log);
gladiator.play ();
gladiator.on('rewind', logger.log);
gladiator.on('pause', logger.log);
gladiator.pause ();
gladiator.off('play', logger.log);
gladiator.off('resume', logger.log);