


// Tampilan awal => tampilkan 25 list film
for (let i = 1; i <= 25; i++) {
    fetch('https://jsonplaceholder.typicode.com/photos/' + i)
    .then((response) => response.json())
    .then((film) => {
        let element = document.createElement('div');
        element.className = 'film-container';
        element.id = "container" + i;
        element.innerHTML = `
            <h3>${film.title}</h3>
            <img src="${film.thumbnailUrl}" alt="Cover Film">
            <p></p>
        `
        document.getElementById('containerFilm').appendChild(element);
    });

    fetch('https://jsonplaceholder.typicode.com/comments/' + i)
    .then((response) => response.json())
    .then((film) => {
        if(document.getElementById("container" + i) != null){
            document.getElementById("container" + i).innerHTML += `
                <p class="deskripsi-film"> Director : ${film.name} </p>
                <p class="deskripsi-film"> Publisher : ${film.email} </p>
                <p class="deskripsi-film"> Sinopsis Film :</p>
                <p class="deskripsi-film"> &emsp; ${film.body + film.body + film.body + film.body + film.body + film.body} </p>
                <button onclick="viewDetails(${i})" class="button-film"> View Detail </button>
            `;
        }
    });
}


function search() {
    // Ambil value berupa ID film dari search box
    let value = document.getElementById("searchBox").value;

    // Hapus list film
    let e = document.getElementById("containerFilm");
        //e.firstElementChild can be used.
        let child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }

    // Ambil API => Search API dengan ID
        //Ambil data (cover film, judul)
        fetch('https://jsonplaceholder.typicode.com/photos/' + value)
        .then((response) => response.json())
        .then((film) => {
                valueFilm = film;

                //Cek apakah ada data yang terambil, jika tidak tampilkan peringatan
                if(film.title == undefined){
                let element = document.createElement('div');
                element.className = 'film-container';
                element.innerHTML = `
                <h2> No movie with id "${value}" </h2>
                <h2> Search it with number id </h2>
                `
                document.getElementById('containerFilm').appendChild(element);
            } else {
                let element = document.createElement('div');
                element.className = 'film-container';
                element.id = "container" + value;
                element.innerHTML = `
                <h3>${film.title}</h3>
                <img src="${film.thumbnailUrl}" alt="Cover Film">
                `
                document.getElementById('containerFilm').appendChild(element);
            }
            });
    
        //Ambil data (author, sinopsis)
        fetch('https://jsonplaceholder.typicode.com/comments/' + value)
        .then((response) => response.json())
        .then((film) => {
            if(document.getElementById("container" + value) != null){
                document.getElementById("container" + value).innerHTML += `
                    <p class="deskripsi-film"> Director : ${film.name} </p>
                    <p class="deskripsi-film"> Publisher : ${film.email} </p>
                    <p class="deskripsi-film"> Sinopsis Film :</p>
                    <p class="deskripsi-film"> &emsp; ${film.body + film.body + film.body + film.body + film.body + film.body} </p>
                    <button onclick="viewDetails(${value})" class="button-film"> View Detail </button>
                `;
            }
        });
}

// Function View Details
function viewDetails(id) {
    // Hapus list film
    let e = document.getElementById("containerFilm");
        //e.firstElementChild can be used.
        let child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    
    // Ambil API => Search API dengan ID
        //Ambil data (cover film, judul)
        fetch('https://jsonplaceholder.typicode.com/photos/' + id)
        .then((response) => response.json())
        .then((film) => {
                valueFilm = film;

                //Cek apakah ada data yang terambil, jika tidak tampilkan peringatan
                if(film.title == undefined){
                let element = document.createElement('div');
                element.className = 'film-container';
                element.innerHTML = `
                <h2> No movie with id "${id} </h2>
                <h2> Search it with number id </h2>
                `
                document.getElementById('containerFilm').appendChild(element);
            } else {
                let element = document.createElement('div');
                element.className = 'film-container';
                element.id = "container" + id;
                element.innerHTML = `
                <h3>${film.title}</h3>
                <img src="${film.thumbnailUrl}" alt="Cover Film">
                `
                document.getElementById('containerFilm').appendChild(element);
            }
            });
    
        //Ambil data (author, sinopsis)
        fetch('https://jsonplaceholder.typicode.com/comments/' + id)
        .then((response) => response.json())
        .then((film) => {
            if(document.getElementById("container" + id) != null){
                document.getElementById("container" + id).innerHTML += `
                    <p class="deskripsi-film"> Director : ${film.name} </p>
                    <p class="deskripsi-film"> Publisher : ${film.email} </p>
                    <p class="deskripsi-film"> Sinopsis Film :</p>
                    <p class="deskripsi-film"> &emsp; ${film.body + film.body + film.body + film.body + film.body + film.body} </p>
                    <p class="deskripsi-film"> &emsp; ${film.body + film.body + film.body + film.body + film.body + film.body} </p>
                    <p class="deskripsi-film"> &emsp; ${film.body + film.body + film.body + film.body + film.body + film.body} </p>
                    <p class="deskripsi-film"> &emsp; ${film.body + film.body + film.body + film.body + film.body + film.body} </p>
                    <input type="button" onclick="location.href='./index.html';" value="Back" class="button-film"/>
                `;
            }
        });
}


// Script search bar
const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");
    menuBtn.onclick = ()=>{
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
    cancelBtn.onclick = ()=>{
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    }
    searchBtn.onclick = ()=>{
      form.classList.add("active");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }