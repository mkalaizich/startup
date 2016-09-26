import Actor from './actorClass';
import EventEmitter from './eventEmitterClass';
import Logger from './loggerClass';
import Movie from './movieClass';

let Social = {

    like : function (friendName) {
        console.log(`${friendName} likes ${this.title}`);
    },

    share : function (friendName) {
        console.log(`Share ${this.title} with ${friendName}`);
   }
};
let logger = new Logger ();
let gladiator = new Movie('Gladiator',2000,155);
let karatekid = new Movie('Karate Kid',1984,126);
let lionking = new Movie('The Lion King',1994,88);
let ralph = new Actor('Ralph Macchio',54);
let otherCast = [
    new Actor ('Pat Morita',73),
    new Actor ('William Zabka',50),
    new Actor ('Elizabeth Shue',52)
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
console.log('The Karate Kid Cast:')
for (let i = 0; i < karatekid.cast.length; i++) {
    console.log(karatekid.cast[i]);
}