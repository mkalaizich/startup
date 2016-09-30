import EventEmiter from 'EventEmiter';
import social from 'social';
import Actor from 'Actor';

class Movie extends EventEmiter {
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