import Actor from 'clases/Actor';
import EventEmitter from 'clases/EventEmitter';
import Logger from 'clases/Logger';
import social from 'clases/social';

document.addEventListener('DOMContentLoaded', function() { 
    let lotr = new Movie('Lord of the rings', 2002, '228 min');
    let logger = new Logger();
    let viggo = new Actor('Viggo Mortensen', 50);
    let someCast = [
        new Actor('Orlando Bloom',45),
        new Actor('Ian McKellen',65),
        new Actor('Elijha Wood',35)
    ];
    
    lotr.on('play', logger.log);
    lotr.play();
    lotr.addCast(viggo);    
    console.log(lotr.actors);
    lotr.addCast(someCast);
    console.log(lotr.actors);
    lotr.share('Mike Blossom');
    lotr.like('Marco Aurelio');
});