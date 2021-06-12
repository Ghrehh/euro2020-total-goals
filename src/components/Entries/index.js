import * as data from 'data';
import { Copy, Title } from 'components/type';
import Pad from 'components/Pad';
import styles from './styles.module.css';

const Entries = () => (
  <section className={styles.entries}>
    <h2><Title>Entries</Title></h2>
    <Pad size="2x" className={styles.entriesInner}>
      {data.entries.map(entry => (
        <p><Copy>{entry}</Copy></p>
      ))}
    </Pad>
  </section>
)

export default Entries;

