// Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const page = parseInt(params.get("page")) || 1;
const moviesPerPage = 4;

const movieData = {
  action: [
    { title: "John Wick", description: "Hitman on a mission", timings: "5PM, 8PM" },
    { title: "Mad Max", description: "Post-apocalyptic action", timings: "6PM, 9PM" },
    { title: "Die Hard", description: "Christmas mayhem", timings: "4PM, 7PM" },
    { title: "Gladiator", description: "Roman revenge tale", timings: "3PM, 6PM" },
    { title: "Dark Knight", description: "Batman’s legacy", timings: "5PM, 9PM" },
    { title: "Avengers", description: "Marvel ensemble", timings: "4PM, 8PM" },
    { title: "Matrix", description: "Reality or simulation?", timings: "2PM, 6PM" },
    { title: "Deadpool", description: "Comedy meets action", timings: "7PM, 10PM" },
    { title: "Extraction", description: "Rescue thriller", timings: "3PM, 9PM" },
    { title: "Skyfall", description: "Bond returns", timings: "4PM, 8PM" }
  ],
  // Add more genres as needed
};

if (category && document.getElementById("movie-container")) {
  const allMovies = movieData[category] || [];
  const start = (page - 1) * moviesPerPage;
  const paginatedMovies = allMovies.slice(start, start + moviesPerPage);

  document.getElementById("category-title").innerText = `${category.toUpperCase()} Movies`;

  const container = document.getElementById("movie-container");
  container.innerHTML = "";

  paginatedMovies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie-card";
    div.innerHTML = `<h2>${movie.title}</h2><p>${category} genre</p>`;
    div.addEventListener("click", () => {
      const movieURL = `movie.html?title=${encodeURIComponent(movie.title)}&category=${category}`;
      window.location.href = movieURL;
    });
    container.appendChild(div);
  });

  // Arrows
  const nav = document.getElementById("nav-buttons");
  if (nav) {
    nav.innerHTML = `
      ${page > 1 ? `<button onclick="navigate(${page - 1})">⬅ Back</button>` : ""}
      ${start + moviesPerPage < allMovies.length ? `<button onclick="navigate(${page + 1})">Next ➡</button>` : ""}
    `;
  }
}

function navigate(newPage) {
  window.location.href = `movies.html?category=${category}&page=${newPage}`;
}
