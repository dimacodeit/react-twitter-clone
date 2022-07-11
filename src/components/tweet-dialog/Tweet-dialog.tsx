import { FunctionComponent } from 'react';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TweetInput from '@Components/tweet-input/Tweet-input';
import { addData, editData, getData } from '@Utils/firestore-methods';
import { useAppDispatch, useAppSelector } from '@Hooks/redux';
import { Timestamp } from 'firebase/firestore';
import { Tweet } from '@Models/tweet';
import { setTweets } from '@Store/reducers/TweetSlice';

interface TweetDialogProps {
  open: boolean;
  editTweet?: boolean;
  tweet?: Tweet;
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
      const data = {
        name: login,
        text,
        date: props?.tweet?.date ?? Timestamp.now(),
        edited: false,
        updateDate: Timestamp.now(),
      };
      if (props?.editTweet && props?.tweet?.id)
        await editData<Omit<Tweet, 'id'>>(colName, props.tweet.id, {
          ...data,
          edited: true,
        });
      else await addData<Omit<Tweet, 'id'>>(colName, data);

      const tweets = await getData(colName);
      dispatch(setTweets(tweets));
      props.onClose();
    }
  };

  return (
    <Dialog open={props.open}>
      <DialogTitle></DialogTitle>
      <TweetInput tweetHandler={tweetHandler} text={props?.tweet?.text} />
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
