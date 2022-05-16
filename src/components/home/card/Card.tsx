import { ITweet } from '../models/tweet';

export interface ITweetCardProp {
  tweet: ITweet;
}

export default function TweetCard({ tweet }: ITweetCardProp) {
  return (
    <div>
      <h3>{tweet.name}</h3>
      <p>{tweet.text}</p>
      <span>{new Date(tweet.date).toDateString()}</span>
    </div>
  );
}
