import { Impact } from 'components/type';
import Pad from 'components/Pad';
import Cards from 'components/Cards';
import Entries from 'components/Entries';
import styles from './App.module.css';

function App() {
  return (
    <>
      <header>
        <Pad size={4}>
          <h1><Impact>Euro 2020 Total Goals Competition</Impact></h1>
        </Pad>
      </header>
      <Pad sides={{ left: 4, right: 4 }}>
        <div className={styles.spacer} />
      </Pad>
      <main>
        <Pad size={4}>
          <Cards />
        </Pad>
        <Pad size={4}>
          <Entries />
        </Pad>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
