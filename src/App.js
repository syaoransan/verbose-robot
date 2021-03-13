import './App.css';
import Header from './components/Header'
import Items from './components/Items';



function App() {
  return (
    <div className="App">
      <Header/>
        <div className='App-ItemContainer'>
            <Items/>  
        </div>                      
    </div>
  );
}

export default App;
