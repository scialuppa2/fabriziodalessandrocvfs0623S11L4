import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../services/api';
import { Article } from '../services/types';

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        const response = await fetchArticles();
        setArticles(response.data.results);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticlesData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={article.image_url}
                className="card-img-top img-fluid"
                alt={article.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h6 className="card-title">{article.title}</h6>
                <Link to={`/article/${article.id}`} className="btn btn-primary">
                  Leggi di più...
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
