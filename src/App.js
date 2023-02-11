import logo from './logo.svg';
import './App.css';

const arr = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]


function App() {
  return (
    <div className="App" >
      <div className={'overfolw'}>
      {arr.map((el) =>
        <span className='div'>{el}</span>
      )}
      </div>
    </div>
  );
}

export default App;
