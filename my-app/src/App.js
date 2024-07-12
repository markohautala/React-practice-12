import css from './App.module.css';
/* import LifeCyclesCDM from './components/LifeCyclesCDM'; */
/* import LifeCyclesCDU from './components/LifeCyclesCDU'; */
import LifeCyclesCWU from './components/LifeCyclesCWU';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <LifeCyclesCDM /> */}
      {/*<LifeCyclesCDU /> */}
      <LifeCyclesCWU />
    </div>
  );
}

export default App;