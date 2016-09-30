import EventEmiter from 'EventEmiter';
import Movie from 'Movie';

class Logger {
    log (event) {
        console.log(`The ${event} event has been emitted!`);
    }
}

export default Logger;