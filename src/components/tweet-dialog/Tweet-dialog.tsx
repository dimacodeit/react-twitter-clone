import { FunctionComponent } from 'react';
import { Dialog, DialogTitle, IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import TweetInput from '@Components/tweet-input/Tweet-input';
import { useAppDispatch, useAppSelector } from '@Hooks/redux';
import { Tweet } from '@Models/tweet';
import { setTweets } from '@Store/reducers/TweetSlice';
import { createTweet, getTweets, updateTweet } from '../../requests/tweets';

interface TweetDialogProps {
  open: boolean;
  editTweet?: boolean;
  tweet?: Tweet;
  onClose: () => void;
}

const TweetDialog: FunctionComponent<TweetDialogProps> = (
  {
    open, editTweet, tweet, onClose,
  }: TweetDialogProps,
) => {
  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state.authReducer);
  const tweetHandler = async (text: string) => {
    if (!login || typeof login !== 'string') return;

    const data = {
      name: login,
      text,
    };
    if (editTweet && tweet?.id) {
      await updateTweet({ ...data, id: tweet.id });
    } else {
      await createTweet(data);
    }

    const tweets = await getTweets();
    dispatch(setTweets(tweets));
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle />
      <TweetInput tweetHandler={tweetHandler} text={tweet?.text} />
      <IconButton
        aria-label="close"
        onClick={onClose}
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
