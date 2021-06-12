import * as data from 'data';
import { Impact } from 'components/type';
import Pad from 'components/Pad';
import Cards from 'components/Cards';
import Entries from 'components/Entries';

function App() {
  return (
    <>
      <header>
        <Pad size="2x">
          <h1><Impact>Euro 2020 Total Goals Competition</Impact></h1>
        </Pad>
      </header>
      <main>
        <Pad size="2x">
          <Cards />
        </Pad>
        <Pad size="2x">
          <Entries />
        </Pad>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
