import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v4',
});

export const fetchArticles = () => api.get('/articles');
export const fetchArticleById = (id: string) => api.get(`/articles/${id}`);
