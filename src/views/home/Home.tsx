import StickyHeader from '@Components/sticky-header/Sticky-header';
import Trends from '@Components/trends/Trends';
import { useAppSelector } from '@Hooks/redux';
import { addData, getData } from '@Utils/firestore-methods';
import { Timestamp } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import Card from './card/Card';
import HomeHeader from './home-header/Home-header';
import { ITweet } from './models/tweet';

export default function Home() {
  const colName = 'tweets';
  const { login } = useAppSelector((state) => state.authReducer);
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const [loading, setLoading] = useState(true);

  const getTweets = useMemo(() => {
    return () => {
      getData<ITweet>(colName).then((res) => {
        setTweets(res);
        setLoading(false);
      });
    };
  }, []);

  const tweetHandler = (text: string) => {
    if (login && typeof login === 'string') {
      addData<Omit<ITweet, 'id'>>(colName, {
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
    <div className="page-layout">
      <div style={{ borderRight: '1px solid var(--border-color)' }}>
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
    </div>
  );
}
