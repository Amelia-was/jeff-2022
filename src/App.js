import './App.css';
import Sidebar from './components/Sidebar';
import Teaching from './components/Teaching'

function App() {
  return (
    <div id='page' className='flex row'>
      <Sidebar />
      <main>
        <nav>
          <ul className='flex row'>
            <li><h3>Research</h3></li>
            <li><h3>Teaching</h3></li>
            <li><h3>Vita</h3></li>
          </ul>
          </nav>
          <Teaching />
      </main>
    </div>
  );
}

export default App;
