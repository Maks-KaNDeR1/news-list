import { useEffect, useState } from 'react';
import { NewsItem } from '../../store';
import { NewsFormProps } from './news-form.props';

export const NewsForm: React.FC<NewsFormProps> = ({ onSubmit, initialData }) => {
    const [title, setTitle] = useState(initialData?.title || '');
    const [content, setContent] = useState(initialData?.content || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        const newsData: NewsItem = {
            id: initialData?.id || Date.now(),
            title,
            content,
            date: new Date().toISOString()
        };

        onSubmit(newsData);
        setTitle('');
        setContent('');
    };

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title)
            setContent(initialData.content)
        }
    }, [initialData])


    return (
        <form onSubmit={handleSubmit} className="news-form">
            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Текст новости"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />

            <div>
                <button type="submit">
                    {initialData ? 'Сохранить' : 'Добавить'}
                </button>
 
                {
                    initialData &&
                    <button>
                        Отмена
                    </button>
                }
            </div>
        </form>
    );
};
