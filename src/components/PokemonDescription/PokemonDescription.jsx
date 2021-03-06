import React, { useContext } from 'react'
import './pokemonDescription.scss'
import PokemonContext from '../../context/PokemonContext';

const PokemonDescription = () => {
const { pokemon } = useContext( PokemonContext );

  return (
    <>
      <section className="pokemonDescription-container">
        {pokemon.map( el => 
        <section key={ el.id }>
          <article className="pokemonDescription-title" >
            <div className='pokemonDescription-name'>
              <h3>{ el.name.toUpperCase() }</h3>
            </div>
            <article className="pokemonDescription-types">
              <div>
                { el.type.map( (type, index) => 
                (<div className={`pokemonDescription-type  ${ type.name}`}  key={index} >
                  <span>{ type.name }</span>
                </div>))}
              </div>
            </article>
          </article>
          <article className="pokemonDescription">
            <p>{el.text}</p>
          </article>
          <article className="pokemonDescription-strengths">
            <h4>Strengths</h4>
            <div>
              { el.strengths.map( (strengths, index) => 
              (<div className={`pokemonDescription-strength  ${ strengths }`}  key={index} >
                <span>{ strengths }</span>
              </div>))}
            </div>
          </article>
          <article className="pokemonDescription-weaknesses">
            <h4>Weakness</h4>
            <div>
              { el.weakness.map( (weakness, index) => 
              (<div className={`pokemonDescription-weakness  ${ weakness}`}  key={index} >
                <span>{ weakness }</span>
              </div>))}
            </div>
          </article>
          {/* <article className="pokemonDescription-strengths">
            <h4>Abilities</h4>
            <div>
              { el.ability.map( (ability, index) => 
              (<div className={`pokemonDescription-ability`}  key={index} >
                <span>{ ability }</span>
              </div>))}
            </div>
          </article> */}
        </section>
        )}
      </section>
    </>
  )
}

export default PokemonDescription