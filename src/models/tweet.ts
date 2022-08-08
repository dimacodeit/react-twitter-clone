import { Timestamp } from 'firebase/firestore';

export interface Tweet {
  // icon - todo
  id: string;
  name: string;
  text: string;
  date: Timestamp | null;
  edited: boolean;
  updateDate: Timestamp;
}

export interface TweetSlice {
  tweets: Tweet[];
}
