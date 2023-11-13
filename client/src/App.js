import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticleListPage from './pages/ArticleListPage'
import NotFoundPage from './pages/NotFound'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App