import HeaderComponent from './components/HeaderComponent';
import './App.css';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <div style={{paddingLeft:"10%"}}>
        <Main />
      </div>
    </div>
  );
}
export default App;
