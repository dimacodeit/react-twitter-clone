import { FunctionComponent } from 'react';
import { ITweet } from '../models/tweet';
import styles from './Card.module.scss';

interface TweetCardProps {
  tweet: ITweet;
  isFirst: boolean;
}

const TweetCard: FunctionComponent<TweetCardProps> = ({
  tweet,
  isFirst,
}: TweetCardProps) => (
  <div className={`${styles.card} ${isFirst ? styles.first : ''}`}>
    <h3>{tweet.name}</h3>
    <p>{tweet.text}</p>
    <span>{`${tweet.date.toDate().toDateString()} ${tweet.date
      .toDate()
      .toLocaleTimeString()}`}</span>
  </div>
);

export default TweetCard;
