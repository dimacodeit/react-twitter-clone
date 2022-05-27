import { Posts } from '@Views/explore/models/news';

export interface NewsSlice {
  news: Posts;
  isLoaded: boolean;
}
