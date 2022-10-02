// search a movie by title, director, release year

function search() {
  const br = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");

  const search = document.querySelector("#search h2");

  const form = document.createElement("form");

  let title = document.createElement("input");
  title.setAttribute("placeholder", "Movie Title");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.innerHTML("Movie Title");

  let director = document.createElement("input");
  director.setAttribute("placeholder", "Director Name");
  director.setAttribute("type", "text");
  director.setAttribute("name", "director");

  let release = document.createElement("input");
  release.setAttribute("placeholder", "Release Year");
  release.setAttribute("type", "text");
  release.setAttribute("name", "release");

  let submit = document.createElement("button");
  submit.setAttribute("text", "Search");
  submit.textContent = "Submit";

  form.append(title, br, director, br2, release, br3, submit);

  search.append(form);
}

search();

// discover a movie based on sub-genre

function discover() {
  const br = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");

  const discover = document.createElement("input");

  const slasher = document.createElement("input");
  slasher.setAttribute("type", "checkbox");
  slasher.setAttribute("value", "slasher");

  discover.append(slasher, br);
}

discover();
