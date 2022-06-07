import { FunctionComponent } from 'react';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TweetInput from '@Components/tweet-input/Tweet-input';
import { addData, getData } from '@Utils/firestore-methods';
import { useAppDispatch, useAppSelector } from '@Hooks/redux';
import { Timestamp } from 'firebase/firestore';
import { Tweet } from '@Models/tweet';
import { setTweets } from '@Store/reducers/TweetSlice';

interface TweetDialogProps {
  open: boolean;
  onClose: () => void;
}

const TweetDialog: FunctionComponent<TweetDialogProps> = (
  props: TweetDialogProps
) => {
  const colName = 'tweets';
  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state.authReducer);
  const tweetHandler = async (text: string) => {
    if (login && typeof login === 'string') {
      await addData<Omit<Tweet, 'id'>>(colName, {
        name: login,
        text,
        date: Timestamp.now(),
      });
      const tweets = await getData(colName);
      console.log(tweets);
      dispatch(setTweets(tweets));
      props.onClose();
      // .then(() => getData(colName).then((resp) => dispatch(setTweets(resp))))
      // .then(() => props.onClose());
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
