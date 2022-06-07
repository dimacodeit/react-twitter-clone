import { Button } from '@mui/material';
import { FunctionComponent, SyntheticEvent, useRef, useState } from 'react';
import styles from './Tweet.module.scss';

interface TweetInputProps {
  tweetHandler: Function;
}

const TweetInput: FunctionComponent<TweetInputProps> = (
  props: TweetInputProps
) => {
  const [textLength, setTextLength] = useState(0);
  const textRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  const onChangeHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    textRef.current.style.height = '30px';
    textRef.current.style.height = `${target.scrollHeight}px`;
    setTextLength(target.value.length);
  };

  const tweet = () => {
    props.tweetHandler(textRef.current.value);
    textRef.current.value = '';
    textRef.current.style.height = '30px';
    setTextLength(0);
  };

  const enterTweet = (e: React.KeyboardEvent) => {
    if (e.ctrlKey && e.code === 'Enter') {
      if (textLength <= 280) tweet();
    }
  };

  return (
    <div className={styles.header}>
      <textarea
        placeholder={`What's happening?`}
        className={styles.header__textarea}
        onChange={onChangeHandler}
        onKeyDown={enterTweet}
        ref={textRef}
      ></textarea>

      <div className={styles.button__container}>
        <Button
          variant="contained"
          onClick={tweet}
          disabled={!textLength || textLength > 280}
        >
          Tweet
        </Button>
        {textLength >= 240 && (
          <div
            className={`${styles.header__symbols} ${
              textLength > 280 ? styles.red__label : ''
            }`}
          >
            {textLength}
          </div>
        )}
      </div>
    </div>
  );
};

export default TweetInput;
