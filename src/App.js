import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Link, Route , Routes} from 'react-router-dom';
import Board from './board/Board';
import Header from './layout/Header';

function App() {




  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
        <a
          className="App-link"
          href="http://localhost:5174/"
          target="_blank"
          rel="noopener noreferrer"
          >
          GO VUE
        </a>


      <Routes>
        <Route path='/board/list' element={<Board/>}></Route>
      </Routes>
      <Link to={'/board/list'}>노티스 리스트</Link>

        
      </header>

          </BrowserRouter>





    </div>
  );
}
        

export default App;
