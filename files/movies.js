// all horror movies

const horror =
  "https://api.themoviedb.org/3/discover/movie?api_key=cf825ab080df10498739e4ab770a6237&with_genres=27";

// fetch(horror)
//   .then((response) => response.json())
//   .then((json) => {
//     // You can do what you like with the result here.
//     console.log(json);
//   });

// subgenres of horror

const slasher = `${horror}&with_keywords=12339`;

const foundFootage = `${horror}&with_keywords=163053`;

const psychological = `${horror}&with_keywords=12565`;

const supernatural = `${horror}&with_keywords=256183`;
