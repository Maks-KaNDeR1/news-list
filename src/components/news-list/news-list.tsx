import { useMemo } from 'react';
import { NewsItem } from "./news-item";
import { NewsListProps } from "./news-list.props";

export const NewsList: React.FC<NewsListProps> = ({ news, onDelete, onEdit }) => {
  const sortedNews = useMemo(() => {
    return [...news].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }, [news]);

  return (
    <div className="news-list">
      {sortedNews.map(item => (
        <NewsItem
          key={item.id}
          newsItem={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};