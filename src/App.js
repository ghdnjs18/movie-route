import './App.css';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home, About, Movie, NotFound } from './pages';
import Menu from './Menu';
import Button from './Button';
import Sidebar from './Sidebar';

function App() {
  const pages = [
    {url: '/', name: 'Home'},
    {url: '/about', name: 'About'},
    {url: '/movies', name: 'Movie'}
  ]

  const [open, setOpen] = useState(false)

  const showSidebar = () => {
    setOpen(!open)
  }

  return (
    <div className="App">
      <Button handleClick={showSidebar}>Menu</Button>
      <Sidebar open={open}>
        <Menu menus={pages}></Menu>
      </Sidebar>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route path="/movies" element={<Movie/>}>
          <Route path=":movieId" element={<Movie/>}/>
        </Route>
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;