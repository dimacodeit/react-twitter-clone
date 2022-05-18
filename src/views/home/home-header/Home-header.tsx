import { Button } from '@mui/material';
import React, { SyntheticEvent, useRef, useState } from 'react';
import styles from './Home-header.module.scss';

export interface IHomeHeaderProps {
  tweetHandler: Function;
}

export default function HomeHeader(props: IHomeHeaderProps) {
  const [isTextEmpty, setIsTextEmpty] = useState(true);
  const textRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const onChangeHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    textRef.current.style.height = '30px';
    textRef.current.style.height = `${target.scrollHeight}px`;

    if (!target.value) setIsTextEmpty(true);
    if (target.value && isTextEmpty) setIsTextEmpty(false);
  };
  const tweet = () => {
    props.tweetHandler(textRef.current.value);
    textRef.current.value = '';
    setIsTextEmpty(true);
  };

  return (
    <div className={styles.header}>
      <textarea
        placeholder={`What's happening?`}
        className={styles.header__textarea}
        onChange={onChangeHandler}
        ref={textRef}
      ></textarea>
      <Button variant="contained" onClick={tweet} disabled={isTextEmpty}>
        Tweet
      </Button>
    </div>
  );
}
