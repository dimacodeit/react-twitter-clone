import { Timestamp } from 'firebase/firestore';

export interface Tweet {
  //icon - todo
  id: string;
  name: string;
  text: string;
  date: Timestamp;
}

export interface TweetSlice {
  tweets: Tweet[];
}
