import logo from './logo.svg';
import './App.css';
import Blog from './Components/Blog';
import TableOfContents from './Components/TableofContents';

function App() {
  return (
    <div className="App">
      <div className='row mx-0'>
        <div className='col-8 text-start my-5'>
          <Blog />
        </div>
        <div className='col-4 text-start border-start'>
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}

export default App;
