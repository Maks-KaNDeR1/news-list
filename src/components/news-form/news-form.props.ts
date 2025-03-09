import { NewsItem } from "../../store";

export interface NewsFormProps {
  onSubmit: (data: NewsItem) => void;
  initialData?: NewsItem | null;
}
