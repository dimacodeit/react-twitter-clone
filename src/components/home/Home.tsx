import Card from './card/Card';
import { MOCK_TWEETS } from './mocks';

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const mocks = MOCK_TWEETS;
  return (
    <div>
      <h1>Home</h1>
      {mocks.map((tweet) => (
        <Card tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
}
