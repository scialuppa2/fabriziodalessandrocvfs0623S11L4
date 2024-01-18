import { useState, useEffect } from 'react';
import { fetchArticleById } from '../services/api';
import { Article, ArticleDetailProps } from '../services/types';

const ArticleDetail = ({ id }: ArticleDetailProps) => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await fetchArticleById(id);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article details:', error);
      }
    };

    fetchArticleData();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className='text-center'>{article.title}</h1>
      <div className="text-center">
        <img
          src={article.image_url}
          alt={article.title}
          className="img-fluid rounded"
          style={{ maxWidth: '500px', maxHeight: '300px' }}
        />
        <p>{article.summary}</p>
      </div>
      <div className="mt-4">
        <p>Pubblicato alle: {new Date(article.published_at).toLocaleTimeString('en-US')}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
        Vai all'articolo intero
      </a>
      </div>
    </div>
  );
};


export default ArticleDetail;


