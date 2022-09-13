const BASE_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=cf825ab080df10498739e4ab770a6237&with_genres=27";

fetch(BASE_URL)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });
