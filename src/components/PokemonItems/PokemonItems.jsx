import React, { useContext, useEffect, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import UrlContext from '../../context/UrlContext';
import './pokemonItems.scss';
import 'animate.css';

const PokemonItems = () => {
  const [error, setError] = useState(false);
  const { nameId, 
          url, 
          pokemons, 
          setPokemons,
          setArrow, 
          loader, 
          setLoader, 
          offset 
        } = useContext( UrlContext );

  useEffect(() => {
  setPokemons([]);
  
  const pokemonApi = async (url) => {
    try {
      let pokemon = {};
      let res = await fetch(url);
      let json = await res.json();

      if (res.ok) {
        setError(false);
      }
      
      if (nameId) {
        const abilities = [];
        const stats = [];
        const types = [];

        pokemon = {
          id: json.id,
          img: json.sprites.other.home.front_default,
          name: json.name,
          height: json.height,
          weight: json.weight
        }

        json.abilities.map(el => {
          abilities.push(el.ability.name)

          pokemon = {
            ...pokemon,
            ability: abilities,
          }
        })

        json.stats.map(el => {
          stats.push(el.stat.name)

          pokemon = {
            ...pokemon,
            stat: stats,
          }
        })

        for (let j = 0; j < json.types.length; j++) {
          let type = json.types[j];
          
          let typesPokemon = {
            name: type.type.name,
            url: type.type.url
          };

          types.push(typesPokemon)

          pokemon = {
            ...pokemon,
            type: types,
          }

          if (json.types[0].type.name === 'normal') {

            if (json.types.length > 1) {
              let typeUrl = json.types[1].type.url;
              let resType = await fetch(typeUrl);
              let dataType = await resType.json();
              let strengthsArr = dataType.damage_relations.double_damage_to;
              let strengths = strengthsArr.map(strength => strength.name);
              let weaknessArr = dataType.damage_relations.double_damage_from;
              let weakness = weaknessArr.map(weak => weak.name);
      
              pokemon = {
                ...pokemon,
                strengths,
                weakness
              }
            } else {
              let typeUrl = json.types[0].type.url;
              let resType = await fetch(typeUrl);
              let dataType = await resType.json();
              let strengths = ['Sin fortalezas'];
              let weaknessArr = dataType.damage_relations.double_damage_from;
              let weakness = weaknessArr.map(weak => weak.name);
      
              pokemon = {
                ...pokemon,
                strengths,
                weakness
              }
            }
            
          }else {
            let typeUrl = json.types[0].type.url;
            let resType = await fetch(typeUrl);
            let dataType = await resType.json();
            let strengthsArr = dataType.damage_relations.double_damage_to;
            let strengths = strengthsArr.map(strength => strength.name);
            let weaknessArr = dataType.damage_relations.double_damage_from;
            let weakness = weaknessArr.map(weak => weak.name);
    
            pokemon = {
              ...pokemon,
              strengths,
              weakness
            }
          }
        }

        let resSpecies = await fetch(json.species.url);
        let jsonSpecies = await resSpecies.json();

        jsonSpecies.flavor_text_entries.forEach(language => {
          if (language.language.name === 'es') {
            pokemon = {
              ...pokemon,
              text: language.flavor_text,
            }
          }
        });
        
        setPokemons( pokemons => ([...pokemons, pokemon]));

      }else {
        for (let i = 0; i < json.results.length; i++) {
          const el = json.results[i];
          const abilities = [];
          const stats = [];
          const types = [];
          let { url } = el;
          let res = await fetch(url);
          let data = await res.json();

          pokemon = {
            id: data.id,
            img: data.sprites.other.home.front_default,
            name: data.name,
            height: data.height,
            weight: data.weight
          }

          data.abilities.map(el => {
            abilities.push(el.ability.name)

            pokemon = {
              ...pokemon,
              ability: abilities,
            }
          })

          data.stats.map(el => {
            stats.push(el.stat.name)

            pokemon = {
              ...pokemon,
              stat: stats,
            }
          })

          for (let j = 0; j < data.types.length; j++) {
            let type = data.types[j];
            
            let typesPokemon = {
              name: type.type.name,
              url: type.type.url
            };

            types.push(typesPokemon)

            pokemon = {
              ...pokemon,
              type: types,
            }

            if (data.types[0].type.name === 'normal') {
    
              if (data.types.length > 1) {
                let typeUrl = data.types[1].type.url;
                let resType = await fetch(typeUrl);
                let dataType = await resType.json();
                let strengthsArr = dataType.damage_relations.double_damage_to;
                let strengths = strengthsArr.map(strength => strength.name);
                let weaknessArr = dataType.damage_relations.double_damage_from;
                let weakness = weaknessArr.map(weak => weak.name);
        
                pokemon = {
                  ...pokemon,
                  strengths,
                  weakness
                }
              } else {
                let typeUrl = data.types[0].type.url;
                let resType = await fetch(typeUrl);
                let dataType = await resType.json();
                let strengths = ['Sin fortalezas'];
                let weaknessArr = dataType.damage_relations.double_damage_from;
                let weakness = weaknessArr.map(weak => weak.name);
        
                pokemon = {
                  ...pokemon,
                  strengths,
                  weakness
                }
              }
              
            }else {
    
              let typeUrl = data.types[0].type.url;
              let resType = await fetch(typeUrl);
              let dataType = await resType.json();
              let strengthsArr = dataType.damage_relations.double_damage_to;
              let strengths = strengthsArr.map(strength => strength.name);
              let weaknessArr = dataType.damage_relations.double_damage_from;
              let weakness = weaknessArr.map(weak => weak.name);
      
              pokemon = {
                ...pokemon,
                strengths,
                weakness
              }
            }
          }

          let resSpecies = await fetch(data.species.url);
          let dataSpecies = await resSpecies.json();

          dataSpecies.flavor_text_entries.forEach(language => {
            if (language.language.name === 'es') {
              pokemon = {
                ...pokemon,
                text: language.flavor_text,
              }
            }
          });

          setPokemons( pokemons => ([...pokemons, pokemon]));
        }
      }
    }
    catch (err) {
      setError(true);
    }
  }

  pokemonApi(url);


  }, [ url ]);

  useEffect(() => {
    setLoader(false);
    setArrow(false);

    if (nameId) {
      setArrow(false);
      setTimeout(() => {
        setLoader(true)
      }, 3000);
    } else {
      setTimeout(() => {
        setArrow(true);
        setLoader(true)
      }, 3000);
    }

  }, [offset, nameId])

  return (
    <>
      <main className='pokemonItems-container'>
        <section className="pokemonItems-pokemons">
        {!loader ? (
        <article className='loader'>
          <div className="o-pokeball c-loader u-tada"></div>
        </article>
        ): 
        ( pokemons.map( el => 
        (<article className={`pokemonItems-card bg-${ el.type[0].name }`} key={ el.id }>
          <div className="card-img">
            <Link to={`${el.name}`}>
              <img src={ el.img } alt={ el.name } />
            </Link>
          </div>
          <span className='card-number'>#{ el.id }</span>
          <h3 className='card-name'>{ el.name }</h3>
          <article className='card-types'>
            {el.type.map( (type, index) => 
            (<div className={`card-type ${ type.name}`}  key={index} >
              <span className='card-type-name'>{ type.name }</span>
            </div>))}
          </article>
        </article>))
        )}
        </section>
        {error &&
        <article className='pokemonItems-error'>
          <div className='pokemonItems-box'>
            <h2>Ningún Pokémon coincide con tu búsqueda</h2>
            <p>Intenta lo siguiente para encontrar resultados:</p>
            <ul>
              <li>Reduce el número de parámetros de búsqueda.</li>
              <li>Haz búsquedas de tipos de Pokémon de uno en uno.</li>
            </ul>
          </div>
        </article>}
      </main>
    </>
  )
}

export default memo(PokemonItems)