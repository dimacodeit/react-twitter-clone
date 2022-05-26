import { useEffect, useState } from 'react';
import axios from 'axios';
import Trends from '@Components/trends/Trends';
import ExploreHeader from './header/Explore-header';
import { IPost, Posts } from './models/news';
import PostCard from './news-card/Article-card';

function duplicate<T>(times: number, data: T[]): T[] {
  let newData: T[] = [];
  for (let i = 0; i < times; i++) {
    newData = newData.concat(data);
  }
  return newData;
}

export default function Explore() {
  const [news, setNews] = useState<Posts>([]);

  useEffect(() => {
    axios
      .get<Posts>(`https://jsonplaceholder.typicode.com/posts`)
      .then(({ data }) => {
        const duplicates = duplicate<IPost>(5, data);
        console.log(duplicates);
        setNews(duplicates);
      });
  }, []);

  return (
    <>
      <div className="g-border-right">
        <ExploreHeader />
        {news.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
      <Trends />
    </>
  );
}
