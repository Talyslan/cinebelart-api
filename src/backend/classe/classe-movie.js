export class Movie {
    // Privates props declaration
    #id;
    #title;
    #director;
    #releaseYear;

    constructor(id, title, director, releaseYear) {
        this.#id = id;
        this.#title = title;
        this.#director = director;
        this.#releaseYear = releaseYear;
    }

    // getters
    getId() {
        return this.#id;
    }

    getTitle() {
        return this.#title;
    }

    getDirector() {
        return this.#director;
    }

    getReleaseYear() {
        return this.#releaseYear;
    }
}