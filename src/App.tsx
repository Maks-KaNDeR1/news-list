import { useState, useEffect } from 'react';
import { NewsForm } from './components/news-form';
import { NewsList } from './components/news-list';
import { loadNews, NewsItem, saveNews } from './store';
import './App.css';


const App = () => {
  const [news, setNews] = useState<NewsItem[]>(loadNews);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    saveNews(news);
  }, [news]);

  useEffect(() => {
    localStorage.setItem('news', JSON.stringify(news));
  }, [news]);

  const addNews = (newNews: Omit<NewsItem, 'id' | 'date'>) => {
    setNews([...news, { ...newNews, id: Date.now(), date: new Date().toISOString() }]);
  };

  const deleteNews = (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить новость?')) {
      setNews(news.filter(item => item.id !== id));
    }
  };

  const updateNews = (updatedNews: NewsItem) => {
    setNews(news.map(item => 
      item.id === updatedNews.id ? updatedNews : item
    ));
    setEditingNews(null);
  };

  return (
    <div className="app">
      <h1>Новости</h1>
      <NewsForm
        onSubmit={editingNews ? updateNews : addNews} 
        initialData={editingNews}
      />
    <div className="news-list-wrapper">
      <NewsList 
        news={news} 
        onDelete={deleteNews} 
        onEdit={setEditingNews} 
      />
    </div>
    </div>
  );
};

export default App;
