export interface Tweet {
  // icon - todo
  id: string;
  name: string;
  text: string;
  date: string;
  edited: boolean;
  updateDate?: string;
}

export interface TweetSlice {
  tweets: Tweet[];
}

export type TweetCreateData = {
  name: string;
  text: string;
}

export type TweetUpdateData = {
  name: string;
  text: string;
  id: string;
}
