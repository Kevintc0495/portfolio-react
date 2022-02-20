import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UrlContext from '../../context/UrlContext';
import './pokemonItems.scss';

const PokemonItems = () => {
  const { nameId, url, pokemons, setPokemons } = useContext( UrlContext );


  useEffect(() => {
  setPokemons([]);
  
  const pokemonApi = async (url) => {
    let pokemon = {};
    let res = await fetch(url);
    let json = await res.json();

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

        let typeUrl = json.types[0].type.url;
        let resType = await fetch(typeUrl);
        let dataType = await resType.json();
        let weaknessArr = dataType.damage_relations.double_damage_from;
        let weakness = weaknessArr.map(weak => weak.name);

        pokemon = {
          ...pokemon,
          weakness
        }
      }

      let resSpecies = await fetch(json.species.url);
      let jsonSpecies = await resSpecies.json();

      pokemon = {
        ...pokemon,
        text: jsonSpecies.flavor_text_entries[42].flavor_text,
      }

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

          let typeUrl = data.types[0].type.url;
          let resType = await fetch(typeUrl);
          let dataType = await resType.json();
          let weaknessArr = dataType.damage_relations.double_damage_from;
          let weakness = weaknessArr.map(weak => weak.name);

          pokemon = {
            ...pokemon,
            weakness
          }
        }

        let resSpecies = await fetch(data.species.url);
        let dataSpecies = await resSpecies.json();

        pokemon = {
          ...pokemon,
          text: dataSpecies.flavor_text_entries[42].flavor_text,
        }

        setPokemons( pokemons => ([...pokemons, pokemon]));
      }
    }
  }

  pokemonApi(url);

}, [ url ]);

  return (
    <>
      <main className='pokemonItems-container'>
        <section className="pokemonItems-pokemons">
        {pokemons.length === 0 ? (
          <h3>Cargando</h3>
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
      </main>
    </>
  )
}

export default PokemonItems