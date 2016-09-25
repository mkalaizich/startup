import EventEmitter from 'js/EventEmitter';
import Movie from 'js/Movie';

class Logger {
    log (event) {
        console.log(`The ${event} event has been emitted!`);
    }
}

export default Logger;