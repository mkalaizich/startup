import Movie from 'Movie';

let social = {
    share : function (friendName) {
        Object.assign(this, Movie);
        console.log(`Share ${this.title} with ${friendName}`);
    },
    like : function (friendName) {
        Object.assign(this, Movie);
        console.log(`${friendName} liked ${this.title}`);
    }
};

export default social;