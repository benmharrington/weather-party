import { useState, useCallback } from 'react';
import PokemonAPI from './pokemon-api';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [listOfPokemon, setListOfPokemon] = useState([]);


  const getPokemon = useCallback(() => {
    PokemonAPI.getSinglePokemon(inputValue).then(data => {
      console.log(data)
      setCurrentPokemon(data)
    });
  }, [inputValue]);

  const getListPokemon = useCallback(() => {
    PokemonAPI.getListOfPokemon().then(data => {
      setListOfPokemon(data?.results);
    });
  }, [])

  console.log(currentPokemon)


  return (
    <div>
      <div className='outer-class'>
        <header>
          <h2 className='monkey'>GET UR POKEMON</h2>
        </header>
        <p>Choose a pokemon and hit the button to access the data.</p>
        <input onChange={event => setInputValue(event.target.value)}/>

        <button onClick={() => getPokemon()}>GET A POKEMON</button>
        <button onClick={() => getListPokemon()}>GET A LIST OF POKEMON</button>
      </div>
      {currentPokemon &&
        <div className='big-number'>
          <h4>{currentPokemon?.name}</h4>
          <p>Abilities: </p>
          <ul>
            {currentPokemon?.abilities.map(mappedValue =>
                <li>{mappedValue.ability.name}</li>
              )}
          </ul>
          {currentPokemon?.name}
        </div>
      }
      {listOfPokemon.length !== 0 &&
        <div className='big-number'>
          <ul>
            {listOfPokemon.map(pokemon => (
              <li>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      }
      <footer> here is my footer.</footer>
    </div>
  );
}

export default App;
