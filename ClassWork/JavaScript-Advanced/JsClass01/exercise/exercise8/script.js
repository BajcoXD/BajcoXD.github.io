const movies = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "Titanic",
  "The Godfather",
  "Avatar",
  "The Dark Knight",
];

function searchMovie() {
  const movieInput = document
    .getElementById("movieInput")
    .value.trim()
    .toLowerCase();
  const result = document.getElementById("result"); // Corrected variable name
  result.innerHTML = ""; // Clear previous result

  if (movieInput === "") {
    result.innerHTML = "<h1>Please enter a movie name.</h1>";
    return;
  }

  let movieExists = false;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].toLowerCase() === movieInput) {
      // Use movieInput here
      movieExists = true;
      break;
    }
  }

  if (movieExists) {
    result.innerHTML = '<h1 class="available">The movie can be rented</h1>';
  } else {
    result.innerHTML =
      '<h1 class="not-available">The movie can\'t be rented</h1>';
  }
}
