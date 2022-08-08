import { FunctionComponent } from 'react';
import TweetInput from '@Components/tweet-input/Tweet-input';

interface HomeHeaderProps {
  tweetHandler: (text: string) => void;
}

const HomeHeader: FunctionComponent<HomeHeaderProps> = (
  { tweetHandler }: HomeHeaderProps,
) => <TweetInput tweetHandler={tweetHandler} />;

export default HomeHeader;
