import { IPost } from '../models/news';

import styles from './Article.module.scss';

export interface IPostCardProps {
  post: IPost;
}

export default function PostCard({ post }: IPostCardProps) {
  return (
    <div className={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
