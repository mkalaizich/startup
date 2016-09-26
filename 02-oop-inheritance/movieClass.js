import EventEmitter from './eventEmitterClass';

class Movie extends EventEmitter {

    constructor (title,year,duration) {
        super ();
        Object.assign(this, Social);
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    addCast (actor) {
        if (actor instanceof Array) {
            for (let i = 0; i < actor.length; i++) {
                this.cast.push(actor[i]);
            }
        } else {
            this.cast.push(actor);
        }
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
}

export default Movie;