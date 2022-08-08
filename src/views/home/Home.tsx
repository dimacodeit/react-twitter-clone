import StickyHeader from '@Components/sticky-header/Sticky-header';
import Trends from '@Components/trends/Trends';
import { useAppDispatch, useAppSelector } from '@Hooks/redux';
import { Tweet } from '@Models/tweet';
import { setTweets } from '@Store/reducers/TweetSlice';
import { addData, deleteData, getData } from '@Utils/firestore-methods';
import { Timestamp } from 'firebase/firestore';
import { FunctionComponent, useCallback, useEffect } from 'react';
import CardEvent from './models/enums';
import Card from './card/Card';
import HomeHeader from './home-header/Home-header';

const Home: FunctionComponent = () => {
  const colName = 'tweets';
  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state.authReducer);
  const { tweets } = useAppSelector((state) => state.tweetReducer);

  const getTweets = useCallback(() => {
    getData<Tweet>(colName).then((resp) => {
      dispatch(setTweets(resp));
    });
  }, [dispatch]);

  const tweetHandler = (text: string) => {
    if (login && typeof login === 'string') {
      addData<Omit<Tweet, 'id'>>(colName, {
        name: login,
        text,
        date: Timestamp.now(),
        edited: false,
        updateDate: Timestamp.now(),
      }).then(() => getTweets());
    }
  };

  const cardEvent = (event: CardEvent, data: Tweet) => {
    switch (event) {
      case CardEvent.Delete:
        deleteData(colName, data.id).then(() => getTweets());
        break;

      default:
        throw Error('There is no such event');
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
        {tweets.map((tweet, index) => (
          <Card
            tweet={tweet}
            key={tweet.id}
            isFirst={index === 0}
            onEvent={(eventType, data) => cardEvent(eventType, data)}
          />
        ))}
      </div>
      <Trends />
    </>
  );
};

export default Home;
