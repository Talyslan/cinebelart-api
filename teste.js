// teste.js
import Movie from "./classe-movie.js";

// Exemplo de uso da classe Movie
const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
console.log("Movie ID:", movie1.getId());
console.log("Title:", movie1.getTitle());
console.log("Director:", movie1.getDirector());
console.log("Release Year:", movie1.getReleaseYear());

const movie2 = new Movie("Interstellar", "Christopher Nolan", 2014);
console.log("Movie ID:", movie2.getId());
console.log("Title:", movie2.getTitle());
console.log("Director:", movie2.getDirector());
console.log("Release Year:", movie2.getReleaseYear());