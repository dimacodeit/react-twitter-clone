import { useEffect, useState } from 'react';
import axios from 'axios';
import Trends from '@Components/trends/Trends';
import ExploreHeader from './header/Explore-header';
import { IArticleModel, News } from './models/news';
import ArticleCard from './news-card/Article-card';

export default function Explore() {
  const [news, setNews] = useState<IArticleModel[]>([]);

  useEffect(() => {
    axios
      .get<News>(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )
      .then(({ data }) => setNews(data.articles));
  }, []);

  return (
    <>
      <div>
        <ExploreHeader />
        {news.map((article) => (
          <ArticleCard
            key={article.publishedAt.toString() + article.source.id}
            article={article}
          />
        ))}
      </div>
      <Trends />
    </>
  );
}
