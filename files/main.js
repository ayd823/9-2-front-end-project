// search a movie by title, director, release year

function search() {
  const br = document.createElement("br");
  const br2 = document.createElement("br");

  const search = document.querySelector("#search h2");
  search.style = "text-align: center;";

  const searchP = document.querySelector("p");
  searchP.textContent =
    "search by movie title, director name, or release year.";
  searchP.style = "font-size: 16px; text-align: center;";

  const form = document.createElement("form");

  let titleText = document.createElement("label");
  titleText.innerHTML = "<strong>Title</strong>: ";
  titleText.style = "font-size:16px;";

  let title = document.createElement("input");
  title.setAttribute("placeholder", "Movie Title");
  title.setAttribute("type", "search");
  title.setAttribute("name", "title");

  let directorText = document.createElement("label");
  directorText.innerHTML = "<strong>Director:</strong> ";
  directorText.style = "font-size:16px;";

  let director = document.createElement("input");
  director.setAttribute("placeholder", "Director Name");
  director.setAttribute("type", "text");
  director.setAttribute("name", "director");

  let submit = document.createElement("button");
  submit.setAttribute("text", "Search");
  submit.textContent = "Submit";

  search.append(searchP, form);

  form.append(titleText, title, br, directorText, director, br2, submit);

  form.style = "text-align: right; margin-right: 300px;";
}

search();

// discover a movie based on sub-genre

function discover() {
  const br = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");

  const discover = document.querySelector("#discover h2");
  discover.style = "text-align:center;";

  const discP = document.createElement("p");
  discP.textContent = "discover based on sub-genre.";
  discP.style = "font-size: 16px; text-align: center;";

  const form = document.createElement("form");

  let slasherText = document.createElement("label");
  slasherText.innerHTML = "Slasher";
  slasherText.style = "font-size:16px; margin-right: 50px;;";

  const slasher = document.createElement("input");
  slasher.setAttribute("type", "checkbox");
  slasher.setAttribute("id", "slasher");
  slasher.setAttribute("value", "Slasher");
  slasher.checked = true;

  let foundFootageText = document.createElement("label");
  foundFootageText.innerHTML = "Found Footage";
  foundFootageText.style = "font-size:16px;";

  const foundFootage = document.createElement("input");
  foundFootage.setAttribute("type", "checkbox");
  foundFootage.setAttribute("id", "slasher");
  foundFootage.setAttribute("value", "Slasher");

  let psychologicalText = document.createElement("label");
  psychologicalText.innerHTML = "Psychological";
  psychologicalText.style = "font-size:16px; margin-right: 10px;";

  const psychological = document.createElement("input");
  psychological.setAttribute("type", "checkbox");
  psychological.setAttribute("id", "psychological");
  psychological.setAttribute("value", "Psychological");

  const supernatural = document.createElement("input");
  supernatural.setAttribute("type", "checkbox");
  supernatural.setAttribute("id", "supernatural");
  supernatural.setAttribute("value", "Supernatural");

  let supernaturalText = document.createElement("label");
  supernaturalText.innerHTML = "Supernatural";
  supernaturalText.style = "font-size:16px; margin-right: 10px;";

  discover.append(discP, form);

  form.append(
    slasher,
    slasherText,
    br,
    foundFootage,
    foundFootageText,
    br2,
    psychological,
    psychologicalText,
    br3,
    supernatural,
    supernaturalText
  );

  discover.append(discP, form);

  form.style = "text-align: center;";
}

discover();
