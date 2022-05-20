import { IArticleModel } from '../models/news';

import styles from './Article.module.scss';

export interface IArticleCardProps {
  article: IArticleModel;
}

export default function ArticleCard({ article }: IArticleCardProps) {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <img
        className={styles.article__img}
        src={article.urlToImage}
        alt={article.source.name}
      />
      <span>{new Date(article.publishedAt).toDateString()}</span>
    </div>
  );
}
