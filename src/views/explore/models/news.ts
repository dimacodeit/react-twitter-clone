export interface IArticleModel {
  source: Source;
  publishedAt: string | Date;
  urlToImage: string;
  title: string;
  description: string;
  url: string;
}

export type Source = {
  id: string;
  name: string;
};

export type News = {
  articles: IArticleModel[];
};
