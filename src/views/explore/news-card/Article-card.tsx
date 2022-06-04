import { FunctionComponent } from 'react';
import { IPost } from '../models/news';
import styles from './Article.module.scss';

interface PostCardProps {
  post: IPost;
}

const PostCard: FunctionComponent<PostCardProps> = ({
  post,
}: PostCardProps) => (
  <div className={styles.card}>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
);

export default PostCard;
