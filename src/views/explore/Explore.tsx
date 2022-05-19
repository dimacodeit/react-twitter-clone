import { useEffect } from 'react';
import axios from 'axios';

export interface IExploreProps {}

export default function Explore(props: IExploreProps) {
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )
      .then((res) => console.log(res));
  }, []);

  return <h1>Explore</h1>;
}
