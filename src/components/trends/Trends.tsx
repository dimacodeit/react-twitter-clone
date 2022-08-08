import { Input } from '@mui/material';
import deepCopy from '@Utils/deep-copy';
import { FunctionComponent } from 'react';
import { ITrends, mockTrends } from './mocks';
import styles from './Trends.module.scss';

const Trends: FunctionComponent = () => {
  const trends = deepCopy<ITrends[]>(mockTrends).sort(
    (a, b) => b.tweets - a.tweets,
  );

  return (
    <div className={styles.trends}>
      <div className={styles.trends__container}>
        <Input
          placeholder="Search Twitter"
          style={{
            width: '100%',
          }}
        />
        <div className={styles.trends__list}>
          <h2 className={styles.trends__title}>Trends for you</h2>
          {trends.map(({ name, tweets, id }) => (
            <div className={styles.trends__item} key={id}>
              <h4 className={styles.trends__name}>{name}</h4>
              <span className={styles.trends__numbers}>
                {tweets}
                {' '}
                Tweets
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;
