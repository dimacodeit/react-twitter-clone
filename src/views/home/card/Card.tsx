import { FunctionComponent } from 'react';
import { Tweet } from '../../../models/tweet';
import styles from './Card.module.scss';

interface TweetCardProps {
  tweet: Tweet;
  isFirst: boolean;
}

const TweetCard: FunctionComponent<TweetCardProps> = ({
  tweet,
  isFirst,
}: TweetCardProps) => (
  <div className={`${styles.card} ${isFirst ? styles.first : ''}`}>
    <h3>{tweet.name}</h3>
    <p className={styles.card__text}>{tweet.text}</p>
    <span>{`${tweet.date.toDate().toDateString()} ${tweet.date
      .toDate()
      .toLocaleTimeString()}`}</span>
  </div>
);

export default TweetCard;
