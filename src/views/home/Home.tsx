import StickyHeader from '@Components/sticky-header/Sticky-header';
import Trends from '@Components/trends/Trends';
import { useAppSelector } from '@Hooks/redux';
import { FirestoreService } from '@Utils/firestore-service';
import { Timestamp } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import Card from './card/Card';
import HomeHeader from './home-header/Home-header';
import { ITweet } from './models/tweet';

export default function Home() {
  const { login } = useAppSelector((state) => state.authReducer);
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const [loading, setLoading] = useState(true);
  const firestore = useMemo(() => new FirestoreService('tweets'), []);

  const getTweets = useMemo(() => {
    return () => {
      firestore.getData<ITweet>().then((res) => {
        setTweets(res);
        setLoading(false);
      });
    };
  }, [firestore]);

  const tweetHandler = (text: string) => {
    if (login && typeof login === 'string') {
      firestore
        .addData<Omit<ITweet, 'id'>>({
          name: login,
          text,
          date: Timestamp.now(),
        })
        .then(() => getTweets());
    }
  };

  useEffect(() => {
    getTweets();
  }, [getTweets]);

  return (
    <div className="page-layout">
      <div>
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
