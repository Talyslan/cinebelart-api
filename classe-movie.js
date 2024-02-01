export default class Movie {
    // Método privado para gerar ID autoincrementado
    static #nextId = 0;
    static generateId() {
        return this.#nextId += 1;
    }

    // Privates props declaration
    #id;
    #title;
    #director;
    #releaseYear;

    constructor(title, director, releaseYear) {
        this.#id = Movie.generateId();
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