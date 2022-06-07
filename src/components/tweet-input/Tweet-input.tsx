import { Button } from '@mui/material';
import { FunctionComponent, SyntheticEvent, useRef, useState } from 'react';
// import styles from './Tweet-input.module.scss';

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
    <div>
      <textarea
        placeholder={`What's happening?`}
        onChange={onChangeHandler}
        onKeyDown={enterTweet}
        ref={textRef}
      ></textarea>

      <div>
        <Button
          variant="contained"
          onClick={tweet}
          disabled={!textLength || textLength > 280}
        >
          Tweet
        </Button>
        {textLength >= 240 && <div>{textLength}</div>}
      </div>
    </div>
  );
};

export default TweetInput;
