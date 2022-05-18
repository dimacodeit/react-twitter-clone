import StickyHeader from '@Components/sticky-header/Sticky-header';
import Trends from '@Components/trends/Trends';
import { useAppSelector } from '@Hooks/redux';
import { useState } from 'react';
import Card from './card/Card';
import HomeHeader from './home-header/Home-header';
import { MOCK_TWEETS } from './mocks';

export default function Home() {
  const { login } = useAppSelector((state) => state.authReducer);
  const [mocks, setMocks] = useState([...MOCK_TWEETS]);
  const tweetHandler = (text: string) => {
    if (login && typeof login === 'string') {
      const newMock = [...mocks];
      newMock.unshift({
        name: login,
        text,
        date: new Date().toString(),
        id: Math.random(),
      });
      setMocks(newMock);
    }
  };

  return (
    <div className="page-layout">
      <div>
        <StickyHeader header="Home" />
        <HomeHeader tweetHandler={tweetHandler} />
        {mocks.map((tweet, index) => (
          <Card tweet={tweet} key={tweet.id} isFirst={index === 0} />
        ))}
      </div>
      <Trends />
    </div>
  );
}
