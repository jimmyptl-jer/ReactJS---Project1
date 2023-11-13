import React from 'react';
import { useParams } from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () => {

  const { articleId } = useParams();

  // Find the article based on the articleId
  const article = articles.find((article) => article.name === articleId);

  // If the article is not found, display a message
  if (!article) {
    return <div>Article not found!</div>;
  }

  return (
    <React.Fragment>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </React.Fragment>
  );
};

export default ArticlePage;
