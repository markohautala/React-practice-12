import css from './App.module.css';
/* import LifeCyclesCDM from './components/LifeCyclesCDM'; */
/* import LifeCyclesCDU from './components/LifeCyclesCDU'; */
import Hooks from './components/Hooks';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <LifeCyclesCDM /> */}
      {/*<LifeCyclesCDU /> */}
      <Hooks />
    </div>
  );
}

export default App;