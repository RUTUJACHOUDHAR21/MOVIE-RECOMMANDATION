const movieData = {
  action: [
    "John Wick", "Mad Max: Fury Road", "Die Hard", "Gladiator", "The Dark Knight",
    "Avengers: Endgame", "Mission Impossible", "The Matrix", "300", "Deadpool"
  ],
  drama: [
    "The Shawshank Redemption", "Forrest Gump", "Fight Club", "The Godfather", "A Beautiful Mind",
    "The Pursuit of Happyness", "12 Years a Slave", "Joker", "Parasite", "The Green Mile"
  ],
  "sci-fi": [
    "Inception", "Interstellar", "The Martian", "Blade Runner 2049", "Tenet",
    "Arrival", "Star Wars", "Avatar", "Edge of Tomorrow", "Ex Machina"
  ],
  comedy: [
    "Superbad", "The Hangover", "Step Brothers", "Bridesmaids", "Jumanji",
    "The Mask", "Ted", "Dumb and Dumber", "21 Jump Street", "Zombieland"
  ]
};

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

if (category) {
  document.getElementById("category-title").innerText = `${category.toUpperCase()} Movies`;

  const container = document.getElementById("movie-container");
  movieData[category].forEach(title => {
    const div = document.createElement("div");
    div.className = "movie-card";
    div.innerHTML = `<h2>${title}</h2><p>${category} genre</p>`;
    container.appendChild(div);
  });
}
