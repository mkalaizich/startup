class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export default Actor;
class EventEmitter {
    constructor() {
        this.events = {};
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

export default EventEmitter;
import EventEmitter from 'js/EventEmitter';
import Movie from 'js/Movie';

class Logger {
    log(event) {
        console.log(`The ${ event } event has been emitted!`);
    }
}

export default Logger;
import EventEmitter from 'js/EventEmitter';
import social from 'js/social';
import Actor from 'js/Actor';

class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        Object.assign(this, Social);
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.actors = [];
    }

    addCast(newActor) {
        if (newActor instanceof Array) {
            this.actors.push.apply(this.actors, newActor);
        } else {
            this.actors.push(newActor);
        }
    }

    play() {
        super.emit('play');
    }

    pause() {
        super.emit('pause');
    }

    resume() {
        super.emit('resume');
    }
}

export default Movie;
import Actor from 'js/Actor';
import EventEmitter from 'js/EventEmitter';
import Logger from 'js/Logger';
import social from 'js/social';

document.addEventListener('DOMContentLoaded', function () {
    let lotr = new Movie('Lord of the rings', 2002, '228 min');
    let logger = new Logger();
    let viggo = new Actor('Viggo Mortensen', 50);
    let someCast = [new Actor('Orlando Bloom', 45), new Actor('Ian McKellen', 65), new Actor('Elijha Wood', 35)];

    lotr.on('play', logger.log);
    lotr.play();
    lotr.addCast(viggo);
    console.log(lotr.actors);
    lotr.addCast(someCast);
    console.log(lotr.actors);
    lotr.share('Mike Blossom');
    lotr.like('Marco Aurelio');
});
import Movie from 'js/Movie';

let social = {
    share: function (friendName) {
        Object.assign(this, Movie);
        console.log(`Share ${ this.title } with ${ friendName }`);
    },
    like: function (friendName) {
        Object.assign(this, Movie);
        console.log(`${ friendName } liked ${ this.title }`);
    }
};

export default social;
