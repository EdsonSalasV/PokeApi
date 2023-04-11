import React, { useEffect, useState } from 'react'
import { MyContext } from './context/MyContext'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Detalles from './pages/Detalles'
import PokeDetalles from './pages/PokeDetalles'

const App = () => {

  const [pokeData, setPokeData] = useState([])

  const getPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const res = await fetch(`${url}?limit=&offset=0`)
    const data = await res.json()

    const promise = data.results.map(async (poke) => {
      const res = await fetch(poke.url)
      const data = await res.json()

      return data
    })

    const data2 = await Promise.all(promise)
    setPokeData(data2)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  /* const loadMore = () =>{
    getPokemon(+50)
  } */

  return (
    <div>
      <MyContext.Provider value={{ pokeData, setPokeData/* , loadMore */ }}>

        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='pokemon' element={<PokeDetalles />} />
            <Route path='pokemon/:id' element={<Detalles />} />



          </Routes>
        </BrowserRouter>

      </MyContext.Provider>
    </div>
  )
}

export default App
