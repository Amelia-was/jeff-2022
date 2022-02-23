import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div id='page' className='flex row'>
      <Sidebar />
      <main>
        <nav>
          <ul className='flex row'>
            <li>Research</li>
            <li>Teaching</li>
            <li>Vita</li>
          </ul>
          </nav>
      </main>
    </div>
  );
}

export default App;
