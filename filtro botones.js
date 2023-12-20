const paintFilterNormal = (pokemon) => {
    const normalButton = document.querySelector("#normal");
  
    normalButton.addEventListener("click", () => {
      const filteredPokemon = filterPokemonByType("normal", pokemon);
      drawPokemon(filteredPokemon);
    });
  };

  const paintFilterFire = (pokemon) => {
    const fireButton = document.querySelector("#fire");
  
    fireButton.addEventListener("click", () => {
      const filteredPokemon = filterPokemonByType("fire", pokemon);
      drawPokemon(filteredPokemon);
    });
  };

const paintFilterWater = (pokemon) => {
    const waterButton = document.querySelector("#water");
  
    waterButton.addEventListener("click", () => {
      const filteredPokemon = filterPokemonByType("water", pokemon);
      drawPokemon(filteredPokemon);
    });
  };


  const paintFilterElectric = (pokemon) => {
    const electricButton = document.querySelector("#electric");
  
    electricButton.addEventListener("click", () => {
      const filteredPokemon = filterPokemonByType("electric", pokemon);
      drawPokemon(filteredPokemon);
    });
  };

  const paintFilterGrass = (pokemon) => {
    const grassButton = document.querySelector("#grass");
  
    grassButton.addEventListener("click", () => {
      const filteredPokemon = filterPokemonByType("grass", pokemon);
      drawPokemon(filteredPokemon);
    });
  };

  
  const paintFilterIce = (pokemon) => {
    const iceButton = document.querySelector("#ice");
  
    iceButton.addEventListener("click", () => {
      const filteredPokemon = filterPokemonByType("ice", pokemon);
      drawPokemon(filteredPokemon);
    });
  };

  const paintFilterFighting = (pokemon) => {
    const fightingButton = document.querySelector("#fighting");
  
    fightingButton.addEventListener("click", () => {
      const filteredPokemon = filterPokemonByType("fighting", pokemon);
      drawPokemon(filteredPokemon);
    });
  };

  



  
