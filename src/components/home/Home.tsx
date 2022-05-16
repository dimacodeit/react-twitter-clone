import Trends from '../trends/Trends';
import Card from './card/Card';
import { MOCK_TWEETS } from './mocks';

export default function Home() {
  const mocks = MOCK_TWEETS;
  return (
    <div>
      <div className="page-layout">
        <div>
          <h2 className="page-title">Home</h2>
          {mocks.map((tweet, index) => (
            <Card tweet={tweet} key={tweet.id} isFirst={index === 0} />
          ))}
        </div>
        <Trends />
      </div>
    </div>
  );
}
