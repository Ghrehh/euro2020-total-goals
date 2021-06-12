import * as data from 'data';
import { Copy, Title } from 'components/type';
import Pad from 'components/Pad';
import styles from './styles.module.css';

const Entries = () => (
  <Pad size={2}>
    <section>
      <Pad sides={{left: 2, right: 2}}>
        <h2><Title>Entries</Title></h2>
      </Pad>
      <Pad size={4} className={styles.entriesInner}>
        {data.entries.map(entry => (
          <p className={styles.entry}><Copy>{entry}</Copy></p>
        ))}
      </Pad>
    </section>
  </Pad>
)

export default Entries;
