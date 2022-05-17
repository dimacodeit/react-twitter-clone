import { ITrends, mockTrends } from './mocks';
import styles from './Trends.module.scss';

export default function Trends() {
  const trends = JSON.parse(JSON.stringify(mockTrends)) as ITrends[];
  return (
    <div className={styles.trends}>
      <div className={styles.trends__container}>
        <input placeholder="Search Twitter" />
        <div className={styles.trends__list}>
          <h2 className={styles.trends__title}>Trends for you</h2>
          {trends.map(({ name, tweets }) => (
            <div className={styles.trends__item} key={tweets + Math.random()}>
              <h4 className={styles.trends__name}>{name}</h4>
              <span className={styles.trends__numbers}>{tweets} Tweets</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
