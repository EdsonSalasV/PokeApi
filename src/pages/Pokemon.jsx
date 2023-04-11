import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pokemon = ({ poke }) => {

    const navigate = useNavigate()

    const HandleClick = () => {
        navigate(`/pokemon/${poke.id}`)
    }

    return (

        <div className="card text-center" style={{ width: "18rem" }}>
            <div className='mt-1'>#0{poke.id}</div>
            <img src={poke.sprites.front_default} className="card-img-top" alt={poke.name} />
            <p>{poke.name}</p>
            <div className="card-body">
                <div className='mb-2'>type: {poke.types[0].type.name}</div>
                <div>
                    <button className='btn btn-warning' onClick={HandleClick}>detalles</button>
                </div>
            </div>
        </div>

    )
}

export default Pokemon
