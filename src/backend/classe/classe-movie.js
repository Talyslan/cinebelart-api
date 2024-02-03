export class Movie {
    // Privates props declaration
    #id;
    #title;
    #director;
    #releaseYear;
    #poster
    
    constructor(id, title, director, releaseYear, poster) {
        this.#id = id;
        this.#title = title;
        this.#director = director;
        this.#releaseYear = releaseYear;
        this.#poster = poster;
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

    getPoster() {
        return this.#poster;
    }
}