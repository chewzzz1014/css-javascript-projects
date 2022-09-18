// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`

    pokemon.classList.add("col-6");
    pokemon.classList.add("col-md-4");
    pokemon.classList.add("col-xl-3");

    pokemon.insertAdjacentElement("beforeend", newImg);
    pokemon.insertAdjacentElement("beforeend", label);
    container.insertAdjacentElement("beforeend", pokemon);
    // pokemon.appendChild(newImg);
    // pokemon.appendChild(label);
    // container.appendChild(pokemon)
}
