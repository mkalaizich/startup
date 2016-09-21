/*
var pause = new CustomEvent();
var resume = new CustomEvent();*/


class EventEmitter {
    constructor() {
        this.events = { } ;
    }

    on(event, callback) {        
        this.events[event] = callback;        
    }
    emit(event) {
        if (this.events[event]) {
            this.events[event](event);
        }
    }
    off(event, callback) {
        if (this.events[event]) {
            delete this.events[event];
        }
    }
}

class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play() {               
        super.emit('play');       
    }
    pause() {
        super.emit('pause')
    }
    resume() {
        super.emit('resume');
    }
}

class Logger {
    log(event) {
        console.log('The '+event+' event has been emitted!');
    }
}

document.addEventListener('DOMContentLoaded', function() { 
    let lotr = new Movie('Lord of the rings', 2002, '228 min');
    let logger = new Logger();
    lotr.on('play', logger.log);
    lotr.on('pause', logger.log);
    lotr.off('pause', logger.log);
    lotr.play(); 
    lotr.pause(); 
});