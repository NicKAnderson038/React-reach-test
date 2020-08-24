import React from 'react'
import { Router } from '@reach/router'
import Nav from './route'
import Main from './components/views/Main'
import About from './components/views/About'
import Items from './components/views/Items'
import Item from './components/views/Item'

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Main path="/" />
        <About path="about" />
        <Items path="items" />
        <Item path="items/:itemId" />
      </Router>
    </div>
  )
}

export default App
