import { useParams } from 'react-router-dom';
import ArticleDetail from './ArticleDetail';

const Article = () => {
  const { id } = useParams<{ id?: string }>();

  if (!id) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <ArticleDetail id={id} />
    </div>
  );
};

export default Article;
