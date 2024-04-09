import './App.css';
import MyComp from './components/MyComp'
// import { Header, Navi, Article } from './components/Comp'
import * as Comp from './components/Comp'

function App() {
  return (
    <div>
      <Comp.Header />
      <Comp.Navi />
      <Comp.Article />
      <MyComp />
    </div>
  );
}

export default App;
