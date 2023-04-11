import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Home = () => {

    const { pokeData, setPokeData } = useContext(MyContext)

    return (
        <div className='container mx-auto d-block'>
            <div className="container mt-3"style={{width: "15rem"}}>
                <img src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png" alt="" />
            </div>
            
        </div>
    )
}

export default Home
