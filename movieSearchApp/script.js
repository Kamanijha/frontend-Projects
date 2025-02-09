
let movieContainer = document.getElementById('movieContainer')
let searchInputBox = document.getElementById('searchInput')
let btn = document.getElementById('searchBtn')
let favoriteContainer = document.getElementById('favoriteContainer')

const getFavorite = () => {
    return JSON.parse(getItem('favorites')) || []
}

const saveFavorite = () => {
    return setItem('favorites', JSON.stringify(favorites))
}

const renderFavorite = () => {
    const favorites = getFavorite()
    favoriteContainer.innerHTML = '';

    if (favorites.length > 0) {
        favorites.forEach(movie => {
            const movieCard = document.createElement('div')
            movieCard.classList.add('movie-card')


            const moviePoster = document.createElement('img')
            moviePoster.src = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'
            moviePoster.alt = movie.Title

            const movieTitle = document.createElement('h2')
            movieTitle.textContent = movie.Title

            movieCard.appendChild(movieTitle)
            movieCard.appendChild(moviePoster)

            favoriteContainer.appendChild(movieCard)
        })
    }else{
        favoriteContainer.innerText = 'no favriout found'
    }
}

// 
const FetchMovie = async (movieName = '') => {
    const apiKey = 'fbcc118d'
    const URL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`

    try {
        const response = await fetch(URL)
        const finalData = await response.json()
        //console.log(finalData)

        movieContainer.innerHTML = ''

        if (finalData.Search && finalData.Search.length > 0) {
            finalData.Search.forEach(movie => {
                const movieCard = document.createElement('div')
                movieCard.classList.add('movie-card')


                const moviePoster = document.createElement('img')
                moviePoster.src = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'
                moviePoster.alt = movie.Title

                const movieTitle = document.createElement('h2')
                movieTitle.textContent = movie.Title


                movieCard.appendChild(movieTitle)
                movieCard.appendChild(moviePoster)


                movieContainer.appendChild(movieCard)

            });
        } else {
            // when movie name not found and wrong name enter by user 
            let movieError = document.createElement('h1')
            movieError.innerText = 'movie not found'
            movieContainer.appendChild(movieError)
        }
    }
    catch (error) {
        console.log("somethinf went wrong", error)
    }

}

// when page load then call function 
document.addEventListener('DOMContentLoaded', () => {
    FetchMovie()
})


// movie name search function
btn.addEventListener('click', () => {
    const movieName = searchInputBox.value.trim()
    //console.log(movieName)
    if (movieName) {
        FetchMovie(movieName)
    } else {
        movieContainer.innerText = 'enter movie name'
    }
})
