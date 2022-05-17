export type ITrends = {
  name: string;
  tweets: number;
};

export const mockTrends: ITrends[] = [
  {
    name: 'iOS 16',
    tweets: randomTweet(),
  },
  {
    name: 'React',
    tweets: randomTweet(),
  },

  {
    name: 'Vue',
    tweets: randomTweet(),
  },
  {
    name: 'JavaScript',
    tweets: randomTweet(),
  },
  {
    name: 'TypeScript',
    tweets: randomTweet(),
  },
  {
    name: 'Scarface',
    tweets: randomTweet(),
  },
  {
    name: 'Apple',
    tweets: randomTweet(),
  },
  {
    name: 'Ethereum',
    tweets: randomTweet(),
  },
  {
    name: 'Angular',
    tweets: randomTweet(),
  },
  {
    name: 'COVID-19',
    tweets: randomTweet(),
  },
];

function randomTweet() {
  return Number((Math.random() * 100000).toFixed());
}
