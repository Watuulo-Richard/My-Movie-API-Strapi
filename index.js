let movieListContainer = document.querySelector('section')
let apiUrl = 'http://localhost:1337/api/movies/?populate=*'

async function fetchRichardData(){
    let response = await fetch(apiUrl)
    let data = await response.json()
    console.log(data)

    return data.data;
    
}

// fetchRichardData()

function movieProfile(movie) {
    let div = document.createElement('div')
    let subHeading = document.createElement('h3')
    let subHeadingTwo = document.createElement('h4')
    let paragraph = document.createElement('p')


    // adding actual values from the API I created

    //for the subHeading it will be (movie.attributes.movieTitle:)
    let movieTitle = `${movie.attributes.movieTitle}`
    subHeading.innerText = movieTitle

    //for the subHeadingTwo, it will be (movie.attributes.releaseDate:)
    let movieDate = `${movie.attributes.releaseDate}`
    subHeadingTwo.innerText = movieDate

    //for the paragraph, it will be (movie.attributes.movieCategory:)
    let movieCategory = `${movie.attributes.movieCategory}`
    paragraph.innerText = movieCategory

    // adding subHeading, subHeadingTwo, and paragraph in a div
    div.append(subHeading, subHeadingTwo, paragraph)

    // adding the movieProfile in the movieListContainer
    movieListContainer.appendChild(div)

}

// movieProfile()



async function addOtherMovieProfiles() {
    let movieArray = await fetchRichardData()

    for(let movie of movieArray){
        movieProfile(movie)
    }
}

addOtherMovieProfiles()





