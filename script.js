// alert('test script');

// const addMoviesToDom = function(movies) {};

// document.getElementById('movieList');

// console.log(movies);

// const movieNames = function(movies) {
//   return movies.map(movie => {
//     return movie.Title;
//   });
// };

const movieNames = movies.map(movie => {
  return movie.Title;
});

// console.log(movieNames);

// movieNames.forEach(function(movieName) {
//   console.log(movieName);
// });

// const addMovieTitlesToDom = function() {
//   movieNames.forEach(function(movieName) {
//     const listItemMovieName = document.createElement('li');
//     listItemMovieName.innerHTML = movieName;
//     const movieList = document.querySelector(' #movieList');
//     movieList.appendChild(listItemMovieName);
//   });
// };

const moviePosters = movies.map(movie => {
  return movie.Poster;
});

// moviePosters.forEach(function(moviePoster) {
//   console.log(moviePoster);
// });

// Onderstaande voegt alle titles in als li in movieList
// const addMoviesToDom = function() {
//   movieNames.forEach(function(movieName) {
//     const listItemMovieName = document.createElement('li');
//     listItemMovieName.innerHTML = movieName;
//     const movieList = document.querySelector(' #movieList');
//     movieList.appendChild(listItemMovieName);
//   });
// };

// onderstaande voegt de links naar de poster toe als li in movielist
// const addMoviesToDom = function() {
//   moviePosters.forEach(function(moviePoster) {
//     const listItemMoviePoster = document.createElement('li');
//     listItemMoviePoster.innerHTML = moviePoster;
//     const movieList = document.querySelector(' #movieList');
//     movieList.appendChild(listItemMoviePoster);
//   });
// };

const removeAllItems = function(event) {
  const parent = document.getElementById('movieList');
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

// Deze maakt van de links plaatjes
const addMoviesToDom = function() {
  moviePosters.forEach(function(moviePoster) {
    const listItemMoviePoster = document.createElement('li');
    const img = document.createElement('img');
    const movieList = document.querySelector(' #movieList');
    movieList.appendChild(listItemMoviePoster);
    listItemMoviePoster.appendChild(img);
    img.src = moviePoster;
  });
};

const filterMovies = function(wordInMovieTitle) {
  const includesWord = movies.filter(movie =>
    movie.Title.includes(wordInMovieTitle)
  );
  console.log(includesWord);
  addMoviesToDom();
};

const buttons = document.querySelectorAll('input[name="moviefilter"]');
// console.log(buttons);
// console.log(Array.from(buttons));

const handleOnChangeEvent = function() {
  console.log(event.target.value);

  switch (event.target.value) {
    case 'recent-movies':
      console.log('nieuwe film aangeklikt');
      filterMovies(Recent);
      removeAllItems();
      break;
    case 'avenger-movies':
      console.log('avenger film aangeklikt');
      filterMovies('Avengers');
      removeAllItems();
      break;
    case 'xmen-movies':
      console.log('xmen film aangeklikt');
      filterMovies('X-Men');
      removeAllItems();
      break;
    case 'princess-movies':
      console.log('princess film aangeklikt');
      filterMovies('Princess');
      removeAllItems();
      break;
    case 'batman-movies':
      console.log('batman film aangeklikt');
      filterMovies('Batman');
      removeAllItems();
      break;
    default:
      console.log('default');
  }
};

const addEventListeners = function() {
  buttons.forEach(function(buttonChange) {
    buttonChange.addEventListener('change', handleOnChangeEvent);
  });
};

document.addEventListener('DOMContentLoaded', function(event) {
  // addMovieTitlesToDom();
  addMoviesToDom();
  addEventListeners();
});
