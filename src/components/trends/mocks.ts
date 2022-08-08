export type ITrends = {
  id: number;
  name: string;
  tweets: number;
};

function randomTweet() {
  return Number((Math.random() * 100000).toFixed());
}

export const mockTrends: ITrends[] = [
  {
    name: 'iOS 16',
    id: 1,
    tweets: randomTweet(),
  },
  {
    name: 'React',
    id: 2,
    tweets: randomTweet(),
  },

  {
    name: 'Vue',
    id: 3,
    tweets: randomTweet(),
  },
  {
    name: 'Scarface',
    id: 4,
    tweets: randomTweet(),
  },
  {
    name: 'Apple',
    id: 5,
    tweets: randomTweet(),
  },
  {
    name: 'Ethereum',
    id: 6,
    tweets: randomTweet(),
  },
  {
    name: 'Angular',
    id: 7,
    tweets: randomTweet(),
  },
  {
    name: 'COVID-19',
    id: 8,
    tweets: randomTweet(),
  },
];
