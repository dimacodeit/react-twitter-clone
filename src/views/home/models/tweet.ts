import { Timestamp } from 'firebase/firestore';

export interface ITweet {
  //icon - todo
  id: string;
  name: string;
  text: string;
  date: Timestamp;
}
