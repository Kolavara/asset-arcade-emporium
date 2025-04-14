
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
  dateAdded: string;
  authorName: string;
  authorImage: string;
  rating: number;
  downloads: number;
  liveDemoUrl?: string;
}
