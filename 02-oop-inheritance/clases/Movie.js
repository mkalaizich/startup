import EventEmitter from 'clases/EventEmitter';
import social from 'clases/social';
import Actor from 'clases/Actor';

class Movie extends EventEmitter {
    constructor (title, year, duration) {
        super();
        Object.assign(this, Social);
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.actors = [];
    }

    addCast (newActor) {
        if (newActor instanceof Array) {
            this.actors.push.apply(this.actors, newActor);
        } else {
            this.actors.push(newActor);
        }
    }

    play () {
        super.emit('play');
    }

    pause () {
        super.emit('pause')
    }

    resume () {
        super.emit('resume');
    }
}

export default Movie;