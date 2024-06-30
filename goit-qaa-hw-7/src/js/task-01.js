// Wszystkie el klasy liklasy item wewn ul z id categories
const categories = document.querySelectorAll(`#categories .item`);

//zliczenie i wyświetlenie liczby kategorii
console.log(`Number of categories: ${categories.length}`);

//Iteracja przez wszystkie elementy li.item
categories.forEach((category) => {
    const title = category.querySelector(`h2`).textContent; //Znalezienie h2 (tutuł) oraz elementy w nim

    const elementsCount = category.querySelectorAll(`ul li`).length; //Wszystke elementy li zagnieżdżone w bieżącej ketegorii

    console.log(`Category: ${title}`); //Wywietlenie tytułu kategorii
    console.log(`Elements: ${elementsCount}`); //Wyświetlenie liczby elementów
});
