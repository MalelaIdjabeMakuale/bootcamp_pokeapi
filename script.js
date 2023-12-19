// USAR INNER HTML 
// ¿?Poner pantalla de carga para esperar ¿?
// La función init es el guion de las funciones .Pone el orden por el cual se ejecutan las funciones

// TO DO:
// cambiar fuente
// girar y hacer que se vean las stats (event listenerclik)
//hacer que los botones del nav sirvan como busqueda (filter, map?)
//


// 1. ASYNC. Define mi función asíncrona, en este caso getPokemons.
// 2. TRY si todo va bien, si se produce algún error CATCH.
// 3. FETCH() sirve para realizar una solicitud a la URL. AWAIT quiere decir que el código debe esperar a que se complete la solicitud antes de continuar.
// 4. CONST DATA = AWAIT RESPONSE.JSON() convierte la respuesta de la solicitud en un objeto JavaScript. Await igual que antes, para esperar a la solicitud.
//5. RETURN DATA = Devuelve el objeto JavaScript convertido para utilizarlo por otras partes del código.
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

//  1. DRAW POKEMON define una función con un argumento llamado pokemon y añade los elementos al HTML para cada pokemon.
// 2. INNER HTML crea un HTML desde Javascript-
// 3. El BUCLE FOR sirve para crear la misma estructura en todos los pokemons de la lista. APPENDCHILD sirve para colocarlo en el lugar que quieras, en el bucle for añado un EVENT LISTENER para que cambie la foto con el mouse over, mouse out.

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
      img.style.backgroundColor = "#fefcfc";
    });

    const type = poke.types[0].type.name;
    console.log(type); //BUSCAR PARA QUE ME SALGAN LOS DOS TIPOS Y NO SÓLO UNO

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

//   1. FILTER sirve para hacer que se pueda buscar por nombre.
// 2. PAINT FILTER es la función que crea el input que permitirá buscar.
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
  input$$.setAttribute("placeholder", "Search your favorite Pokemon");
  input$$.addEventListener("input", () => filterPokemon(pokemon));
  document.body.appendChild(input$$);
};
//  1. Init sirve de hoja de ruta. Se van poniendo las funciones que van a ser llamadas para que se ejecuten.
//  2. Init llama a la función Init y arranca todo.
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


