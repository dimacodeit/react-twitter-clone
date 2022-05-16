import { useState } from 'react';
import Trends from '../trends/Trends';
import Card from './card/Card';
import HomeHeader from './home-header/Home-header';
import { MOCK_TWEETS } from './mocks';

export default function Home() {
  const [mocks, setMocks] = useState([...MOCK_TWEETS]);
  const tweetHandler = (text: string) => {
    const newMock = [...mocks];
    newMock.unshift({
      name: 'Tweet',
      text,
      date: new Date().toString(),
      id: Math.random(),
    });
    setMocks(newMock);
  };
  return (
    <div className="page-layout">
      <div>
        <HomeHeader tweetHandler={tweetHandler} />
        {mocks.map((tweet, index) => (
          <Card tweet={tweet} key={tweet.id} isFirst={index === 0} />
        ))}
      </div>
      <Trends />
    </div>
  );
}
