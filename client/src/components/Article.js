import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({articles}) => {
  return (
    <>
      {articles.map((article, index) => (
        <Link to={`/articles/${article.name}`} key={index}>
          <h3>
            {article.title}
          </h3>
          <p>
            {article.content[0].substring(0, 150)}
          </p>
        </Link>
      ))}
    </>
  )
}

export default Article