
    let searchInput = document.querySelector("#searchInput");
    let searchButton = document.querySelector("#searchBtn");
    let moviesContainer = document.querySelector("#movies");
    let currentMovies = [];

    async function searchMovies(event) {
      
    let movieName = searchInput.value.trim();
    if (movieName === "") {
    moviesContainer.innerHTML = "<p>Please enter a movie name</p>";
    return;
}

    let url = ` http://www.omdbapi.com/?i=tt3896198&apikey=1aaf743c&s=${encodeURIComponent(movieName)}`;
    moviesContainer.innerHTML = "<p>Loading...</p>";
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        if (data.Response === "False") {
            throw new Error(data.Error);
        }

        let movies = data.Search;
        currentMovies = movies;
       moviesContainer.innerHTML = `<p>Found ${data.totalResults} movies</p>`;
       displayMovies(currentMovies);
    searchInput.value = "";
    }
    catch (error) {
        moviesContainer.innerHTML = `<p>Movie not found</p>`;
    }
    
    };

    searchButton.addEventListener("click", searchMovies);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchMovies();
    }
});


function displayMovies(movies) {
    movies.forEach((movie) => {
        let card = document.createElement("div");
        card.dataset.imdbId = movie.imdbID;

        card.addEventListener("click",async function () {
            let id = card.dataset.imdbId;
            let detailUrl = `http://www.omdbapi.com/?apikey=1aaf743c&i=${id}`;
            try {
    let responce = await fetch(detailUrl);
    if (!response.ok) {
    throw new Error("Network response was not ok");
}
    let detailData = await responce.json();
    
}catch (error) {
    moviesContainer.innerHTML = "<p>Failed to load movie details</p>";
}
            let detailPoster = detailData.Poster !== "N/A"
    ? detailData.Poster
    : "https://via.placeholder.com/150";
            


            moviesContainer.innerHTML = `<h2>${detailData.Title}</h2>
            <img src="${detailPoster}" alt="${detailData.Title}">
            <p> ${detailData.Genre}</p>
            <p> ${detailData.Plot}</p> 
            <p> ${detailData.imdbRating}</p>
            <p>Year: ${detailData.Year}</p>
            <p> ${detailData.Actors}</p>
            <p> ${detailData.Director}</p>
             <button id="backBtn">Back</button>`;
            let backBtn = document.querySelector("#backBtn");
            backBtn.addEventListener("click", function() {
    displayMovies(currentMovies);
});
});


        let poster = movie.Poster !== "N/A"
    ? movie.Poster
    : "https://via.placeholder.com/150";
        card.classList.add("card");
        card.innerHTML = `
                <img src="${poster}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>Year: ${movie.Year}</p>
            `;
        moviesContainer.appendChild(card);
        console.log(movie.imdbID);
    });
}