import { NewsItem } from "../../../store";

export interface NewsItemProps {
  newsItem: NewsItem;
  onDelete: (id: number) => void;
  onEdit: (news: NewsItem) => void;
}