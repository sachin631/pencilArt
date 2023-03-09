import React from 'react'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import Navbar from './components/navbar/Navbar'
import Portrait from './components/Portrait/Portrait'
import Praise from './components/Praise/Praise'

const App = () => {
  return (
    <>
      <Navbar/>
      <Portrait/>
      <Praise/>
      <FeaturedProducts/>
    </>
  )
}

export default App