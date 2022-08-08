import { Button } from '@mui/material';
import {
  FunctionComponent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  MutableRefObject,
} from 'react';
import styles from './Tweet.module.scss';

interface TweetInputProps {
  tweetHandler: (text: string) => void;
  text?: string;
}

const TweetInput: FunctionComponent<TweetInputProps> = (
  { tweetHandler, text = '' }: TweetInputProps,
) => {
  const [textLength, setTextLength] = useState(0);
  const textRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const onChangeHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    textRef.current.style.height = '30px';
    textRef.current.style.height = `${target.scrollHeight}px`;
    setTextLength(target.value.length);
  };

  const tweet = () => {
    tweetHandler(textRef.current.value);
    textRef.current.value = '';
    textRef.current.style.height = '30px';
    setTextLength(0);
  };

  const enterTweet = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.code === 'Enter') {
      if (textLength <= 280) tweet();
    }
  };

  useEffect(() => {
    if (text) textRef.current.value = text;
  }, [text]);

  return (
    <div className={styles.header}>
      <textarea
        placeholder={'What\'s happening?'}
        className={styles.header__textarea}
        onChange={onChangeHandler}
        onKeyDown={enterTweet}
        ref={textRef}
      />

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
