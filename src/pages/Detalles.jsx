import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { useParams } from 'react-router-dom'

const Detalles = () => {

    const { pokeData } = useContext(MyContext)

    const { id } = useParams()
    const pokedetail = pokeData.find(item => item.id == id)

    return (
        <div className='container text-center'>
            <div className='container row d-flex justify-content gap-3 mt-5'>

                <div className='card' style={{ width: "25rem" }}>
                    <h1>{pokedetail.name}</h1>
                    <img src={pokedetail.sprites.front_default} className="card-img-top" alt="" />
                    <div className="text-center">
                        <h3>Estadisticas</h3>
                        <p>{pokedetail.stats[0].stat.name}: {pokedetail.stats[0].base_stat}</p>
                        <p>{pokedetail.stats[1].stat.name}: {pokedetail.stats[1].base_stat}</p>
                        <p>{pokedetail.stats[2].stat.name}: {pokedetail.stats[2].base_stat}</p>
                        <p>{pokedetail.stats[3].stat.name}: {pokedetail.stats[3].base_stat}</p>
                        <p>{pokedetail.stats[4].stat.name}: {pokedetail.stats[4].base_stat}</p>
                        <p>{pokedetail.stats[5].stat.name}: {pokedetail.stats[5].base_stat}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detalles
