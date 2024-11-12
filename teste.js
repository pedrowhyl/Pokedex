async function getData() {
    const  url = "https://pokeapi.co/api/v2/pokemon";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);


        }

        
        const json = await response.json();
        console.log(json);
        
        
        const listContainer = document.getElementById('lista');
        
        json.results.forEach(async(pokemon) => {
            const listItem = document.createElement('li');
          

            const currentPokemon = await fetch(pokemon.url)
            const currentPokemonJson = await currentPokemon.json()
            
            
            console.log(currentPokemonJson)
            
            const element = `
            <li>
            <id> Nº ${currentPokemonJson.id}</id>
            <img src="${currentPokemonJson.sprites.other.home.front_default}" alt"foto do pokemon"/>
            <p> ${currentPokemonJson.name}</p>
            </li>
            `

            
            listContainer.innerHTML += element
        
        
            });
           
           
        } catch (error) {
            console.error(error.message);
           
           
        }      
    }

getData()