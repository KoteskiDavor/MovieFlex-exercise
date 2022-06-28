const api = "api_key=9c9ecf6ef00e0fad5102e0379c3f21a2";

const base_url = "https://api.themoviedb.org/3";

const final_url = base_url + "discover/movie?sort_by=popularity.desc&" + api;

const img_url = "https://image.tmdb.org/t/p/original";

const requests = {
    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
}
window.addEventListener('scroll', function() {
    let header = document.querySelector('.navbar');
    header.classList.toggle("sticky", window.scrollY > 0)
})
fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.querySelector(".app");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("netflix_row");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "NETFLIX ORIGINALS";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);
        data.results.forEach(movie => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            var s1 = movie.id;
            poster.id = s1;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster)
        })
    })
// trending
fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.querySelector(".app");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("netflix_row");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "TRENDING NOW";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);
        data.results.forEach(movie => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster)
        })
    })
fetch(requests.fetchPopular)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.querySelector(".app");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("netflix_row");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "POPULAR";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);
        data.results.forEach(movie => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            var s3 = movie.id;
            poster.id = s3;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster)
        })
    })
fetch(requests.fetchActionMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.querySelector(".app");
    const row = document.createElement("div");
    row.className="row";
    row.classList.add("netflix_row");
    headrow.appendChild(row);
    const title = document.createElement("h2")
    title.className = "row_title";
    title.innerText = "ACTION MOVIES";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s4 = movie.id;
        poster.id = s4;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})
fetch(requests.fetchComedyMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.querySelector(".app");
    const row = document.createElement("div");
    row.className="row";
    row.classList.add("netflix_row");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "COMEDY MOVIES";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        const poster = document.createElement("img")
        poster.className = "row__posterLarge";
        var s5 = movie.id;
        poster.id = s5;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})
fetch(requests.fetchHorrorMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.querySelector(".app");
    const row = document.createElement("div");
    row.className="row";
    row.classList.add("netflix_row");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "HORROR MOVIES";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        const poster = document.createElement("img")
        poster.className = "row__posterLarge";
        var s6 = movie.id;
        poster.id = s6;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})
fetch(requests.fetchRomanceMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.querySelector(".app");
    const row = document.createElement("div");
    row.className="row";
    row.classList.add("netflix_row");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "ROMANCE MOVIES";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        console.log(movie)
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s7 = movie.id;
        poster.id = s7;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})
fetch(requests.fetchDocumentaries)
.then((res) => res.json())
.then((data) => {
    const headrow = document.querySelector(".app");
    const row = document.createElement("div");
    row.className="row";
    row.classList.add("netflix_row");
    headrow.appendChild(row);
    const title = document.createElement("h2")
    title.className = "row_title";
    title.innerText = "DOCUMENTARIES MOVIES";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s8 = movie.id;
        poster.id = s8;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})