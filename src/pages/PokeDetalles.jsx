import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Pokemon from './Pokemon'

const PokeDetalles = () => {



    const { pokeData, setPokeData, loadMore } = useContext(MyContext)

    return (
        <div className='container mt-2'>
            <div className='row d-flex justify-content-between gap-5'>
                {pokeData.map(poke => <Pokemon key={poke.id} poke={poke} />)}
            </div>
            {/* <div className='text-center m-5'>
                <button className="btn btn-success btn-lg" onClick={loadMore}>Cargar Pokemon</button>
            </div> */}
        </div>
    )
}

export default PokeDetalles
