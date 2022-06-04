import { FunctionComponent, useCallback, useEffect } from 'react';
import axios from 'axios';
import Trends from '@Components/trends/Trends';
import ExploreHeader from './header/Explore-header';
import { IPost, Posts } from './models/news';
import PostCard from './news-card/Article-card';
import { setNewsReducer } from '@Store/reducers/NewsSlice';
import { useAppDispatch, useAppSelector } from '@Hooks/redux';

function duplicate<T>(times: number, data: T[]): T[] {
  let newData: T[] = [];
  for (let i = 0; i < times; i++) {
    newData = newData.concat(data);
  }
  return newData;
}

const Explore: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { isLoaded, news } = useAppSelector((state) => state.newsReducer);
  const loadNews = useCallback(() => {
    axios
      .get<Posts>(`https://jsonplaceholder.typicode.com/posts`)
      .then(({ data }) => {
        const duplicates = duplicate<IPost>(5, data);
        dispatch(setNewsReducer(duplicates));
      });
  }, [dispatch]);

  useEffect(() => {
    if (!isLoaded) loadNews();
  }, [isLoaded, loadNews]);

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
};

export default Explore;
