const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

//znalezienie elementu ul#ingredients
const ingredientsList = document.getElementById(`ingredients`);

//Fragment dokumentu wstawiający wszystkie <li> na raz
const fragment = document.createDocumentFragment();

//tablica składników - iterowanie
ingredients.forEach((ingredient) => {
    const li = document.createElement(`li`); //tworzenie elementu li
    li.textContent = ingredient; //tekst jako nazwa składnika
    li.classList.add(`item`); //Dodanie klasy item
    fragment.appendChild(li); //Dodanie <li> do fragmentu
});
ingredientsList.appendChild(fragment); //Wstawienie fragmentu do listy w 1 operacji
