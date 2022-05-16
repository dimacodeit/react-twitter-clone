import { ITweet } from '../models/tweet';
import styles from './Card.module.scss';

export interface ITweetCardProp {
  tweet: ITweet;
  isFirst: boolean;
}

export default function TweetCard({ tweet, isFirst }: ITweetCardProp) {
  return (
    <div className={`${styles.card} ${isFirst ? styles.first : ''}`}>
      <h3>{tweet.name}</h3>
      <p>{tweet.text}</p>
      <span>{new Date(tweet.date).toDateString()}</span>
    </div>
  );
}
