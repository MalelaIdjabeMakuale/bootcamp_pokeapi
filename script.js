// USAR INNER HTML 
// ¿?Poner pantalla de carga para esperar ¿?
// La función init es el guion de las funciones .Pone el orden por el cual se ejecutan las funciones

// TO DO:
// // cambiar fuente
// girar y hacer que se vean las stats (event listenerclik), crear otro innerHTML para que repetir la misma estructura en todos?
//hacer que los botones del nav sirvan como busqueda (filter, map?)
//


// Array vacío y lo voy llenando con los pokemons que extraigo del bucle for. Añado i al hacer fetch porque así . 
// La función es asíncrona para que no mande una petición hasta que esté resuelta la anterior. 
//Try y Catch devuelven el resultado o un error al hacer la función y return devuelve el Array de pokemons lleno en forma de objeto (json)

const getPokemon = async (id) => {
  const pokemonArray = []; //Existe en todo el código

  for (let i = 1; i <= 150; i++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      console.log(response);
      const results = await response.json();
      console.log(results);
      pokemonArray.push(results);
    } catch (error) {
      console.log(error);
    }
  }

  return pokemonArray;
};

// PONER ORDEN A ESTA PARTE
//PINTAR LOS POKEMON, DIV Y ESTRUCTURA GENERAL
//DRAW POKEMON define una función con un argumento llamado pokemon y añade los elementos al HTML para cada pokemon (h4, p, botón y lo que surja)
// INNER HTML crea un HTML desde Javascript
// El BUCLE FOR (poke of pokemon va completando todo en cada vuelta hasta 150) sirve para crear la misma estructura en todos los pokemons de la lista. 
//APPENDCHILD sirve para colocarlo en el lugar que quieras, en el bucle for añado un EVENT LISTENER para que cambie la foto con el mouse over, mouse out. También añado un EVENT LISTENER 
//Creo la constante typeColors para que a cada ID le corresponda un color. En el mouseover le meto el color de fondo cuando está encima el ratón. y en el botón del tipo también se lo meto.

const drawPokemon = (pokemon) => {
  const div$$ = document.querySelector(".pokemon");
  div$$.innerHTML = "";


  for (const poke of pokemon) {
    const div = document.createElement("div");
    div.classList.add("pokemon-card");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    const pHeight = document.createElement("p");
    const pWeight = document.createElement("p");
    const typeBtn = document.createElement("button");

    const typeColors = {
        normal: '#A8A877',
        fighting: '#c52020',
        flying: '#b02890',
        poison: '#97269f',
        ground: '#E0C068',
        rock: '#757538',
        bug: '#507f54',
        ghost: '#af96c1',
        steel: '#a6a68',
        fire: '#db661e',
        water: '#2880d3',
        grass: '#178e66',
        electric: '#a9b11b',
        psychic: '#e888dd',
        ice: '#82e0ee',
        dragon: '#8508d2',
        dark: '#705848',
        fairy: '#ce92c2',
       };

      

       
    img.setAttribute("src", poke.sprites.back_shiny);
    img.setAttribute("alt", poke.name);

    img.addEventListener("mouseover", () => {
      img.src = poke.sprites.front_default;
      img.style.backgroundColor = typeColors[type];
    });

    img.addEventListener("mouseout", () => {
      img.src = poke.sprites.back_shiny;
      img.style.backgroundColor = "#e9e7e7";
    });

    const type = poke.types[0].type.name;
    console.log(type)
    // console.log(type); //BUSCAR PARA QUE ME SALGAN LOS DOS TIPOS Y NO SÓLO UNO
    div.style.border = "2px solid";
    div.style.borderRadius = "5vh";
    div.style.borderColor = typeColors[type];

    h4.textContent = poke.name;
    pHeight.textContent = `Height: ${poke.height} m`;
    pWeight.textContent = `Weight: ${poke.weight} kg`;
    typeBtn.textContent = `${type}`;

    typeBtn.style.backgroundColor = typeColors[type];
    

    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(pHeight);
    div.appendChild(pWeight);
    div.appendChild(typeBtn);

    div$$.appendChild(div);
  }

  
};

// HERRAMIENTAS PARA FILTRAR LOS POKEMONS
//  FILTER sirve para hacer que se pueda buscar por nombre.
// PAINT FILTER es la función que crea el input que permitirá buscar.
// los botones filtran por ID(tipo de pokemon)
const filterPokemon = (pokemon) => {
  let input$$ = document.querySelector("input");
  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(input$$.value.toLowerCase())
  );
  drawPokemon(filteredPokemon);
};


const paintFilter = (pokemon) => {
  let input$$ = document.createElement("input");
  input$$.setAttribute("type", "text");
  input$$.setAttribute("placeholder", "Search by name");
  input$$.addEventListener("input", () => filterPokemon(pokemon));
  document.body.appendChild(input$$);
}

// const FirePokemon = (pokemon) => {
//   const filteredPokemonFire = pokemon.filter((poke) => poke.types[0].type.name.includes(`fire`));
//   return filteredPokemonFire;
// };
// console.log(FirePokemon)


// const type = poke.types[0].type.name;

//  1. Init sirve de hoja de ruta. Se van poniendo las funciones que van a ser llamadas para que se ejecuten.
//  2. Init llama a la función Init y arranca todo.(?)
const init = async () => {
  const pokemon = await getPokemon();
  console.log(pokemon);
  paintFilter(pokemon);
  const div$$ = document.createElement("div");
  div$$.classList.add("pokemon");
  document.body.appendChild(div$$);
  drawPokemon(pokemon);
};

init();