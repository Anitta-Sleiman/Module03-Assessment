// import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllArticles from "./pages/AllArticles/AllArticles"
import SingleArticle from './pages/SingleArticle/SingleArticle';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
      <Route path="/allarticles" element={<AllArticles />} />
      <Route path="/article/:id" element={<SingleArticle />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
