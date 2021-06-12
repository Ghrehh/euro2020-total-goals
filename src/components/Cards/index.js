import * as data from 'data';
import Pad from 'components/Pad';
import Card from './Card';
import { Impact, Copy } from 'components/type';
import styles from './styles.module.css';

const Cards = () => (
  <Pad size={2}>
    <section className={styles.cards}>
      <Card className={styles.card} title="Games played">
        <p>
          <Impact>{data.finishedMatchesCount}</Impact>
          <Copy>/{data.totalMatchesCount}</Copy>
        </p>
      </Card>

      <Card className={styles.card} title="Goals scored">
        <p>
          <Impact>{data.goalsScored}</Impact>
        </p>
      </Card>

      <Card className={styles.card} title="Goals per game">
        <p>
          <Impact>{data.averageGoalsPerGame}</Impact>
        </p>
      </Card>

      <Card className={styles.card} title="Projected goals">
        <p>
          <Impact>{data.projectedTotalGoals}</Impact>
        </p>
      </Card>

      <Card className={styles.card} title="Entries">
        <p>
          <Impact>{data.entriesCount}</Impact>
        </p>
      </Card>

      <Card className={styles.card} title="Prize pot">
        <p>
          <Impact>{data.prizePot}</Impact>
        </p>
      </Card>
    </section>
  </Pad>
);

export default Cards;
