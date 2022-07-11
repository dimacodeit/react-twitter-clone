import ConfirmDialog from '@Components/confirm-dialog/Confirm-dialog';
import TweetDialog from '@Components/tweet-dialog/Tweet-dialog';
import EditIcon from '@mui/icons-material/Edit';
import { Timestamp } from 'firebase/firestore';
import { FunctionComponent, useState } from 'react';
import { Tweet } from '../../../models/tweet';
import { CardEvent } from '../models/enums';
import TweetMenu from '../tweet-menu/TweetMenu';
import styles from './Card.module.scss';

interface TweetCardProps {
  tweet: Required<Tweet>;
  isFirst: boolean;
  onEvent: (eventType: CardEvent, tweet: Tweet) => void;
}

const TweetCard: FunctionComponent<TweetCardProps> = ({
  tweet,
  isFirst,
  onEvent,
}: TweetCardProps) => {
  const [isOpen, setOpen] = useState(false);
  const [isTweetDialogOpen, setTweetDialogOpen] = useState(false);
  const handleOption = (option: string) => {
    switch (option) {
      case CardEvent.Delete:
        setOpen(true);
        break;
      case CardEvent.Update:
        setTweetDialogOpen(true);
        break;
      default:
        break;
    }
  };

  const getDateString = (date: Timestamp) =>
    `${date.toDate().toDateString()} ${date.toDate().toLocaleTimeString()}`;
  return (
    <>
      <div className={`${styles.card} ${isFirst ? styles.first : ''}`}>
        <h3>{tweet.name}</h3>
        <p className={styles.card__text}>{tweet.text}</p>
        <span>{getDateString(tweet.updateDate ?? tweet.date)}</span>
        <div className={styles.card__edit_icon}>
          {tweet.edited ? (
            <EditIcon fontSize="small" sx={{ color: '#808080' }} />
          ) : null}
        </div>
        <div className={styles.card__menu}>
          <TweetMenu onOption={handleOption} />
        </div>
      </div>
      <TweetDialog
        open={isTweetDialogOpen}
        editTweet={true}
        tweet={tweet}
        onClose={() => setTweetDialogOpen(false)}
      />
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
