class Actor {

    constructor (name,age) {
        this.name = name
        this.age = age;
    }
}

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
        console.log('The '+ event s+' event has been emitted!');
    }
}

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
};

let Social = {

    like : function (friendName) {
        console.log(`${friendName} likes ${this.title}`);
    },

    share : function (friendName) {
        console.log(`Share ${this.title} with ${friendName}`);
   }
};
let logger = new Logger ();
let gladiator = new Movie("Gladiator",2000,155);
let karatekid = new Movie("Karate Kid",1984,126);
let lionking = new Movie("The Lion King",1994,88);
let ralph = new Actor("Ralph Macchio",54);
let otherCast = [
    new Actor ("Pat Morita",73),
    new Actor ("William Zabka",50),
    new Actor ("Elizabeth Shue",52)
];

//Some commands to try out the different methods
gladiator.on('play', logger.log);
gladiator.play();
gladiator.on('rewind', logger.log);
gladiator.on('pause', logger.log);
gladiator.pause();
gladiator.off('play', logger.log);
gladiator.off('resume', logger.log);
karatekid.like('Javo Cremona'); 
lionking.share('Chepo Garcia');
karatekid.addCast(ralph);   
karatekid.addCast(otherCast);
console.log("The Karate Kid Cast:")
for (let i = 0; i < karatekid.cast.length; i++) {
    console.log(karatekid.cast[i]);
}
