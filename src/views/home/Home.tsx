import StickyHeader from '@Components/sticky-header/Sticky-header';
import Trends from '@Components/trends/Trends';
import { useAppDispatch, useAppSelector } from '@Hooks/redux';
import { Tweet } from '@Models/tweet';
import { setTweets } from '@Store/reducers/TweetSlice';
import { addData, getData } from '@Utils/firestore-methods';
import { Timestamp } from 'firebase/firestore';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import Card from './card/Card';
import HomeHeader from './home-header/Home-header';

const Home: FunctionComponent = () => {
  const colName = 'tweets';
  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state.authReducer);
  const { tweets } = useAppSelector((state) => state.tweetReducer);
  const [loading, setLoading] = useState(true);

  const getTweets = useCallback(() => {
    getData<Tweet>(colName).then((resp) => {
      dispatch(setTweets(resp));
      setLoading(false);
    });
  }, [dispatch]);

  const tweetHandler = (text: string) => {
    if (login && typeof login === 'string') {
      addData<Omit<Tweet, 'id'>>(colName, {
        name: login,
        text,
        date: Timestamp.now(),
      }).then(() => getTweets());
    }
  };

  useEffect(() => {
    getTweets();
  }, [getTweets]);

  return (
    <>
      <div className="g-border-right">
        <StickyHeader header="Home" />
        <HomeHeader tweetHandler={tweetHandler} />
        {loading ? (
          <div>Loading...</div>
        ) : (
          tweets.map((tweet, index) => (
            <Card tweet={tweet} key={tweet.id} isFirst={index === 0} />
          ))
        )}
      </div>
      <Trends />
    </>
  );
};

export default Home;
