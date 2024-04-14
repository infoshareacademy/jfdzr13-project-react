import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './containers/Layout/Layout';
import Search from './containers/Search/Search';
import Pokemon from './containers/Pokemon/Pokemon';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Search />} />
        <Route path="pokemon/:pokemonName" element={<Pokemon />} />
      </Route>
    </Routes>
  )
}

export default App