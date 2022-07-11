import ConfirmDialog from '@Components/confirm-dialog/Confirm-dialog';
import { FunctionComponent, useState } from 'react';
import { Tweet } from '../../../models/tweet';
import { CardEvent } from '../models/enums';
import TweetMenu from '../tweet-menu/TweetMenu';
import styles from './Card.module.scss';

interface TweetCardProps {
  tweet: Tweet;
  isFirst: boolean;
  onEvent: (eventType: CardEvent, tweet: Tweet) => void;
}

const TweetCard: FunctionComponent<TweetCardProps> = ({
  tweet,
  isFirst,
  onEvent,
}: TweetCardProps) => {
  const [isOpen, setOpen] = useState(false);
  const handleOption = (option: string) => {
    switch (option) {
      case CardEvent.Delete:
        setOpen(true);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className={`${styles.card} ${isFirst ? styles.first : ''}`}>
        <h3>{tweet.name}</h3>
        <p className={styles.card__text}>{tweet.text}</p>
        <span>{`${tweet.date.toDate().toDateString()} ${tweet.date
          .toDate()
          .toLocaleTimeString()}`}</span>
        <div className={styles.card__menu}>
          <TweetMenu onOption={handleOption} />
        </div>
      </div>
      <ConfirmDialog
        titleText="Удалить твит?"
        isOpen={isOpen}
        onConfirm={() => {
          onEvent(CardEvent.Delete, tweet);
          setOpen(false);
        }}
        onReject={() => setOpen(false)}
      />
    </>
  );
};

export default TweetCard;
