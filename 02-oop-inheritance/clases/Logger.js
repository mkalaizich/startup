import EventEmitter from 'clases/EventEmitter';
import Movie from 'clases/Movie';

class Logger {
    log (event) {
        console.log(`The ${event} event has been emitted!`);
    }
}

export default Logger;