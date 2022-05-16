import { Button } from '@mui/material';
import React, { SyntheticEvent, useRef } from 'react';
import styles from './Home-header.module.scss';

export interface IHomeHeaderProps {
  tweetHandler: Function;
}

export default function HomeHeader(props: IHomeHeaderProps) {
  const textRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const onChangeHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    textRef.current.style.height = '30px';
    textRef.current.style.height = `${target.scrollHeight}px`;
  };
  const tweet = () => props.tweetHandler(textRef.current.value);

  return (
    <div className={styles.header}>
      <h2 className={styles.header__title}>Home</h2>
      <textarea
        placeholder={`What's happening?`}
        className={styles.header__textarea}
        onChange={onChangeHandler}
        ref={textRef}
      ></textarea>
      <Button variant="contained" onClick={tweet}>
        Tweet
      </Button>
    </div>
  );
}
