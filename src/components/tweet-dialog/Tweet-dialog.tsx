import { FunctionComponent } from 'react';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TweetInput from '@Components/tweet-input/Tweet-input';
import { addData } from '@Utils/firestore-methods';
import { useAppSelector } from '@Hooks/redux';
import { ITweet } from '@Views/home/models/tweet';
import { Timestamp } from 'firebase/firestore';

interface TweetDialogProps {
  open: boolean;
  onClose: () => void;
}

const TweetDialog: FunctionComponent<TweetDialogProps> = (
  props: TweetDialogProps
) => {
  const colName = 'tweets';
  const { login } = useAppSelector((state) => state.authReducer);
  const tweetHandler = (text: string) => {
    if (login && typeof login === 'string') {
      addData<Omit<ITweet, 'id'>>(colName, {
        name: login,
        text,
        date: Timestamp.now(),
      }).then(() => props.onClose());
    }
  };

  return (
    <Dialog open={props.open}>
      <DialogTitle></DialogTitle>
      <TweetInput tweetHandler={tweetHandler} />
      <IconButton
        aria-label="close"
        onClick={props.onClose}
        sx={{
          position: 'absolute',
          left: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
    </Dialog>
  );
};

export default TweetDialog;
