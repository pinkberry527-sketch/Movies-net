const movies =[
    {
      title: "screan 7" ,
      year: 2025,
      genre: "Horror",
      description: "A group of friends go on a vacation and get terrorized by a masked killer.",
      image: "./asset/t_500x300 (1).jpg"
    },
    {
        title:"scary movie 6",
        year:2025,
        genre:"Horror",
        description: "A group of friends go on a vacation and get terrorized by a masked killer.",
        image: "./asset/t_500x300.jpg"
    },
    {
        title:"Goat",
        year:2026,
        genre:"Children",
        description: "A small goat named Will gets a once-in-a-lifetime shot to join the pros and play roarball -- a high-intensity, full-contact sport that's dominated by the fastest, fiercest animals in the world. Ridiculed by his teammates, Will becomes determined to prove that he belongs.",
        image: "./asset/t_500x300 (2).jpg"
    },
    {
        title:"The Fall Guy",
        year:2024,
        genre:"Action",
        description: "A stuntman must find the missing star of his blockbuster movie before the film's release.",
        image: "./asset/the fall guy.jpg"
    },
    {
        title:"The bluff",
        year:2026,
        genre:"Action",
        description: "A Caribbean woman gets her secret past revealed when her island is invaded by vicious buccaneers.",
        image: "./asset/t_500x300 (4).jpg"
    },
    {
        title:"Hoppers",
        year:2026,
        genre:"Children",
        description: "A young rabbit named Pip embarks on a thrilling adventure to find the legendary Golden Carrot, facing challenges and making new friends along the way.",
        image: "./asset/t_500x300 (3).jpg"
    },
    {
        title:"Arthur the King",
        year:2024,
        genre:"Adventure",
        description: "An unexpected friendship forms between a world-class adventure racer and a scrappy stray dog as they fight to survive the Ecuadorian jungle.",
        image: "./asset/t_1024x1024 (4).webp"
    },
    {
        title:" The return",
        year:2025,
        genre:"Adventure",
        description: "",
        image: "./asset/t_1024x1024 (5).webp"
    },
    {
        title:" rip",
        year:2025,
        genre:"Comedy",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: "./asset/t_1024x1024 (2).webp"
    },
    {
        title:"war machine",
        year:2026,
        genre:"Action",
        description: "A combat engineer leads a group of soldiers against an otherworldly killing machine in the remote wilderness.",
        image: "./asset/war machine.webp"
    },
    {
        title:"wrecking crew",
        year:2026,
        genre:"Action",
        description: "A combat engineer leads a group of soldiers against an otherworldly killing machine in the remote wilderness.",
        image: "./asset/wrecking crew.webp"
    },
    {
        title:"Eternity",
        year:2026,
        genre:"Drama",
        description: "A combat engineer leads a group of soldiers against an otherworldly killing machine in the remote wilderness.",
        image: "./asset/t_1024x1024 (1).webp"
    },
    {
        title:"Peaky Blinders",
        year:2026,
        genre:"Drama",
        description: "A combat engineer leads a group of soldiers against an otherworldly killing machine in the remote wilderness.",
        image: "./asset/t_1024x1024 (3).webp"
    },
    {
        title:"The Drama",
        year:2026,
        genre:"Comedy",
        description: "A combat engineer leads a group of soldiers against an otherworldly killing machine in the remote wilderness.",
        image: "./asset/t_1024x1024.webp"
    },
];

const container=document.getElementById("movies-container")
const search =document.getElementById("search_input")
const genreFilter=document.getElementById("genreFilter")

const modal=document.getElementById("movieModal")
const closebtn=document.getElementById("close")
const favIcon=document.getElementById("favIcon")

// Store favorites as a selection of movie titles
let favorites = new Set();
let currentMovieTitle = "";

// display movies function
function displayMovies(list){
    container.innerHTML="";
    list.forEach(movie =>{
        const movieDiv =document.createElement("Div");
        movieDiv.classList.add("movie");

        movieDiv.innerHTML=`
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-info">
            <h2>${movie.title}</h2>
            <p>${movie.year}</p>
            <p>${movie.genre}</p>
            <p>${movie.description}</p>
        </div>
        `;

        movieDiv.addEventListener("click",()=>{
            openModal(movie);
        });
        container.appendChild(movieDiv);
    });
}
displayMovies(movies);


search.addEventListener("keyup",()=>{
    filterMovies();
});
genreFilter.addEventListener("change",()=>{
    filterMovies();
});

function filterMovies (){
    const searchValue= search.value.toLowerCase();
    const genreValue = genreFilter.value;
    let filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchValue)
    );
    if(genreValue !== "all"){
        filteredMovies = filteredMovies.filter(movie => movie.genre === genreValue);
    }
    displayMovies(filteredMovies);

}

function openModal(movie){
    document.getElementById("modalImg").src=movie.image;
    document.getElementById("modalTitle").textContent=movie.title;
    document.getElementById("modalYear").textContent=movie.year;
    document.getElementById("modalGenre").textContent=movie.genre;
    document.getElementById("modalDesc").textContent=movie.description;
    currentMovieTitle = movie.title;
    
    // Set initial heart icon based on favorite status
    if (favorites.has(movie.title)) {
        favIcon.classList.remove("bi-heart");
        favIcon.classList.add("bi-heart-fill", "active");
    } else {
        favIcon.classList.remove("bi-heart-fill", "active");
        favIcon.classList.add("bi-heart");
    }
    
    modal.style.display="flex";
}
closebtn.addEventListener("click",()=>{
    modal.style.display="none";
});

favIcon.addEventListener("click", () => {
    if (favorites.has(currentMovieTitle)) {
        favorites.delete(currentMovieTitle);
        favIcon.classList.remove("bi-heart-fill", "active");
        favIcon.classList.add("bi-heart");
    } else {
        favorites.add(currentMovieTitle);
        favIcon.classList.remove("bi-heart");
        favIcon.classList.add("bi-heart-fill", "active");
    }
});

window.addEventListener("click",(event)=>{
    if(event.target === modal){
        modal.style.display="none";
    }
});

