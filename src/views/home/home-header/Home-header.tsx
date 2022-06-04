import { FunctionComponent } from 'react';
import TweetInput from '@Components/tweet-input/Tweet-input';

interface HomeHeaderProps {
  tweetHandler: Function;
}

const HomeHeader: FunctionComponent<HomeHeaderProps> = (
  props: HomeHeaderProps
) => <TweetInput tweetHandler={props.tweetHandler} />;

export default HomeHeader;
