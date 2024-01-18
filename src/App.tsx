import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import ArticleList from './component/ArticleList';
import Article from './component/Article';
import MyNavbar from './component/MyNavbar';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
