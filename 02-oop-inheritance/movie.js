let Movie = class {

    constructor (title,year,duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play () {
        console.log("playing" + "" + this.title + "" + "right now");
    }

    pause () {
        console.log(this.title + "" + "is paused");
    }

    resume () {
        console.log("resume playing" + "" + this.title);
    }
};

let gladiator = new Movie("Gladiator",2000,155);
let karatekid = new Movie("Karate Kid",1984,126);
let lionking = new Movie("The Lion King",1994,88);