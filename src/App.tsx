import './App.css';
import { useStore } from './stores/stores';

function App() {
  const { count, inc, dec } = useStore();

  return (
    <>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
      <button onClick={dec}>one down</button>
    </>
  );
}

export default App;
