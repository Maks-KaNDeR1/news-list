import { NewsItemProps } from "./news-item.props";

export const NewsItem: React.FC<NewsItemProps> = ({ newsItem, onDelete, onEdit }) => {
  return (
    <div className="news-item">
      <h3>{newsItem.title}</h3>
      <p>{newsItem.content}</p>
      <small>
        {new Date(newsItem.date).toLocaleString('ru-RU', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })}
      </small>
      <div className="actions">
        <button onClick={() => onEdit(newsItem)}>Редактировать</button>
        <button onClick={() => onDelete(newsItem.id)}>Удалить</button>
      </div>
    </div>
  );
};