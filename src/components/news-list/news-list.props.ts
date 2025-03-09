import { NewsItem } from "../../store";

export interface NewsListProps {
  news: NewsItem[];
  onDelete: (id: number) => void;
  onEdit: (news: NewsItem) => void;
}
