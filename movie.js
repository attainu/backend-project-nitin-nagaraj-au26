//TMDB API
const API_KEY = 'api_key=55a31149f8cf2dc6ac2f48470c51dc0b';
const Base_URL = 'https://api.themoviedb.org/3';
const API_URL = Base_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const main = document.getElementById('main');

getMovie(API_URL)

function getMovie(url){

    fetch(url).then(res => res.json).then(data =>{
        console.log(data.results)
        showMovie(data);
    })
}

function showMovie(data){
    main.innerHTML = '';
    

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview  } = movie
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movieinfo">
                <h3>${title}</h3>
                <span class="${getcolor(vote_average)}">${vote_average}</span>

            </div>
            <div class="overview">
                <h3>overview</h3>
                ${overview}

            </div>
        
        `
        
    })
}

function getcolor(vote){
    if(vote>= 8){
        return 'green'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
}