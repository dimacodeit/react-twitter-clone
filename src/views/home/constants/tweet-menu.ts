import { TweetMenuOption } from '../models/types';
import { CardEvent } from '../models/enums';

const TWEET_MENU_OPTIONS: TweetMenuOption[] = [
  {
    label: 'Удалить',
    value: CardEvent.Delete,
  },
  {
    label: 'Редактировать',
    value: CardEvent.Update,
  },
  {
    label: 'В закладки',
    value: CardEvent.Bookmark,
  },
];

export const ITEM_HEIGHT = 30;

export default TWEET_MENU_OPTIONS;