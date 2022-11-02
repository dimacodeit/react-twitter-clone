import axios, { AxiosResponse } from 'axios';
import { Tweet, TweetCreateData, TweetUpdateData } from '../models/tweet';
import { envRoute } from '../constants/environment';

const endpoint = `${envRoute}tweets`;

export const getTweets = () => axios.get<Tweet[]>(endpoint);

export const getTweetById = (id: string) => axios.get<Tweet>(`${endpoint}/${id}`);

export const createTweet = (data: TweetCreateData) => axios
  .post<Tweet, AxiosResponse<Tweet>, TweetCreateData>(endpoint, data);

export const updateTweet = (data: TweetUpdateData) => axios
  .put<Tweet, AxiosResponse<Tweet>, TweetUpdateData>(endpoint, data);

export const deleteTweet = (id: string) => axios.delete(`${endpoint}/${id}`);
