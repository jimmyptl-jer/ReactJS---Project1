import React from 'react'
import articles from './article-content'
import Article from '../components/Article'

const ArticleListPage = () => {
  return (
    <div>
     <h1>
      Articles
      </h1>
      <Article articles={articles}/>
    </div>
  )
}

export default ArticleListPage