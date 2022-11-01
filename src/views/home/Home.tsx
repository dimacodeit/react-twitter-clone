import StickyHeader from '@Components/sticky-header/Sticky-header';
import Trends from '@Components/trends/Trends';
import { useAppDispatch, useAppSelector } from '@Hooks/redux';
import { Tweet } from '@Models/tweet';
import { setTweets } from '@Store/reducers/TweetSlice';
import { FunctionComponent, useCallback, useEffect } from 'react';
import { createTweet, deleteTweet, getTweets } from '../../requests/tweets';
import CardEvent from './models/enums';
import Card from './card/Card';
import HomeHeader from './home-header/Home-header';

const Home: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state.authReducer);
  const { tweets } = useAppSelector((state) => state.tweetReducer);

  const fetchTweets = useCallback(() => {
    getTweets().then((resp) => dispatch(setTweets(resp.data)));
  }, [dispatch]);

  const tweetHandler = (text: string) => {
    if (login && typeof login === 'string') {
      createTweet({
        name: login,
        text,
      }).then(() => fetchTweets());
    }
  };

  const cardEvent = (event: CardEvent, data: Tweet) => {
    switch (event) {
      case CardEvent.Delete:
        deleteTweet(data.id).then(() => fetchTweets());
        break;

      default:
        throw Error('There is no such event');
    }
  };

  useEffect(() => {
    fetchTweets();
  }, [fetchTweets]);

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
