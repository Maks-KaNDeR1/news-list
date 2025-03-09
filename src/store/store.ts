import { NewsItem } from "./types";

export const loadNews = (): NewsItem[] => {
  try {
    const savedNews = localStorage.getItem('news');
    return savedNews ? JSON.parse(savedNews) : [];
  } catch {
    return [];
  }
};

export const saveNews = (news: NewsItem[]) => {
  localStorage.setItem('news', JSON.stringify(news));
};
